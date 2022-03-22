import { jsPDF } from "jspdf";

const doc = new jsPDF();
const generarPdf = (contenido) => {
  doc.html(contenido);
  doc.save("a4.pdf");

}
export default generarPdf;