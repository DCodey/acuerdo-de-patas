import { jsPDF } from "jspdf";

const doc = new jsPDF();
const generarPdf = (contenido, id) => {
  doc.fromHTML(({id}.html(contenido)), 15, 15,{
            'color': 'red',
        });
  doc.save("a4.pdf");
}
export default generarPdf;