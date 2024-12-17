// components/CurvyBackground.js
const CurvyBackground = () => {
    return (
      <svg
        className="absolute top-0 left-0 w-full h-64 -z-51"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#e8f8f5" // Change this color to whatever light color you want
          d="M0,128L30,101.3C60,75,120,21,180,32C240,43,300,117,360,160C420,203,480,213,540,192C600,171,660,117,720,85.3C780,53,840,43,900,64C960,85,1020,139,1080,160C1140,181,1200,149,1260,128C1320,107,1380,85,1410,74L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
        ></path>
      </svg>
    );
  };
  
  export default CurvyBackground;
  