import { jsPDF } from "jspdf";

export const PdfDownload = (cont) => {
  const doc = new jsPDF("p", "pt", "a4");
  doc.html(cont, {
    callback: function (doc) {
      doc.save("acuerdo de patas.pdf");
    }
  })
}