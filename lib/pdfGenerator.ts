import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generatePdf = async (
	element: HTMLElement,
	filename: string,
	returnBlob: boolean = false
): Promise<Blob | void> => {
	const canvas = await html2canvas(element, {
		scale: 2,
		useCORS: true,
		logging: false,
	});

	const imgData = canvas.toDataURL("image/png");
	const pdf = new jsPDF("p", "mm", "a4");
	const imgWidth = 210; // A4 width in mm
	const pageHeight = 297; // A4 height in mm
	const imgHeight = (canvas.height * imgWidth) / canvas.width;

	let heightLeft = imgHeight;
	let position = 0;

	pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
	heightLeft -= pageHeight;

	// Add new pages for long invoices
	while (heightLeft >= 0) {
		position = heightLeft - imgHeight;
		pdf.addPage();
		pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
		heightLeft -= pageHeight;
	}

	if (returnBlob) {
		return pdf.output("blob");
	} else {
		pdf.save(filename);
	}
};
