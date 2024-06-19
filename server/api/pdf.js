import { getByDateRange, getOrderedRecords, generateHTML } from "../controllers/recordController";
// import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import pdf from "html-pdf";

// import {createPDF, streamReturnPDF} from '#pdf'
export default defineEventHandler(async (event) => {
	const { startDate, endDate } = await readBody(event);
	if (!startDate && !endDate) {
		return await getOrderedRecords();
	}
	const filteredRecords = await getByDateRange(startDate, endDate);

	// Generar HTML para el contenido del PDF
	const htmlContent = generateHTML(filteredRecords);

	// Opciones para html-pdf
	const options = {
		format: "Letter",
	};

	// Generar el PDF y guardarlo temporalmente
	const pdfPath = path.join(__dirname, "temp", "report.pdf");
	pdf.create(htmlContent, options).toFile(pdfPath, (err) => {
		if (err) {
			console.error("Error generating PDF:", err);
			return { error: "Error generating PDF" };
		} else {
			// Enviar el PDF como respuesta
			event.node.res.setHeader(
				"Content-Disposition",
				'attachment; filename="report.pdf"'
			);
			event.node.res.setHeader("Content-Type", "application/pdf");
			fs.createReadStream(pdfPath).pipe(event.node.res);
		}
	});
});
