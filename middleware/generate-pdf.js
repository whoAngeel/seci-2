
import jsPDF from 'jspdf';

export default function (req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send({ error: 'Method Not Allowed' });
    }

    const { data } = req.body;

    // Aquí generas el contenido del PDF utilizando jsPDF
    const doc = new jsPDF();
    doc.text(`Título: ${data.titulo}`, 10, 10);
    doc.text(`Descripción: ${data.descripcion}`, 10, 20);
    // Añade aquí el resto de detalles del registro

    const pdfContent = doc.output();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="registro.pdf"');
    res.send(pdfContent);
}