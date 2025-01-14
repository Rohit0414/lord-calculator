import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook

const Meter = ({ sgpa }) => {
  const { theme } = useTheme();  // Access theme from ThemeContext
  const canvasRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);
  const animationDuration = 1000; // Duration for smooth animation

  useEffect(() => {
    const startTime = performance.now();
    const initialValue = currentValue;
    const targetValue = (sgpa / 10) * 100; // Convert SGPA to percentage (0-10 scale to 0-100 percentage)

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      const newValue = initialValue + (targetValue - initialValue) * progress;
      setCurrentValue(newValue);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [sgpa, currentValue]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const radius = canvas.height / 2 - 30;
    const centerX = canvas.width / 2;
    const centerY = canvas.height * 0.75;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background arc
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 0);
    ctx.lineWidth = 12;
    ctx.strokeStyle = "#e0e0e0";  // Background color
    ctx.stroke();

    // Draw filled arc based on percentage value
    const fillAmount = (currentValue / 100) * Math.PI;
    const gradient = ctx.createConicGradient(Math.PI, centerX, centerY);
    gradient.addColorStop(0, "#105045");
    gradient.addColorStop(0.5, "#81c784");
    gradient.addColorStop(1, "#105045");

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, Math.PI + fillAmount);
    ctx.lineWidth = 10;
    ctx.strokeStyle = gradient;
    ctx.stroke();

    // Calculate needle position based on the filled percentage
    const needleAngle = Math.PI + (currentValue / 100) * Math.PI;
    console.log("needleAngle", needleAngle);  // Debugging: Check the angle calculation

    // Draw needle
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + radius * Math.cos(needleAngle), 
      centerY + radius * Math.sin(needleAngle)
    );
    ctx.lineWidth = 3;

    // Ensure the needle is drawn in a visible color
    ctx.strokeStyle = "#FF0000"; // Hardcode the color for debugging
    ctx.stroke();

    // Draw labels for the meter (0, 10, 20, ..., 100)
    ctx.fillStyle = theme === "dark" ? "#e0e0e0" : "#333";  // Text color based on theme
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const labelOffset = 25;
    for (let i = 0; i <= 10; i += 1) {
      const angle = Math.PI - (i / 10) * Math.PI;
      const labelX = centerX + (radius + labelOffset) * Math.cos(angle);
      const labelY = centerY - (radius + labelOffset) * Math.sin(angle);
      ctx.fillText(i, labelX, labelY);
    }
  }, [currentValue, theme]);

  return <canvas ref={canvasRef} width={400} height={220} className="mx-auto"></canvas>;
};

export default Meter;
