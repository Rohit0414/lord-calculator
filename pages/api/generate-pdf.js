import { jsPDF } from 'jspdf';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { historyData } = req.body;

        const doc = new jsPDF();
        let yOffset = 30;
        doc.setFontSize(12);

        historyData.forEach((entry, index) => {
            doc.text(`S.No: ${index + 1}`, 20, yOffset);
            doc.text(`Percentage: ${entry.percentage}%`, 60, yOffset);
            doc.text(`CGPA: ${entry.cgpa}`, 120, yOffset);
            yOffset += 10;
        });

        const pdfPath = path.join(process.cwd(), 'public', 'calculation_history.pdf');
        doc.save(pdfPath); 
        res.status(200).json({ filePath: '/calculation_history.pdf' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
