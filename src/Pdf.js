import { jsPDF } from "jspdf";

export const converHTMLToPDF = (cont) => {
  const pdf = new jsPDF("p", "pt", "a4");
  pdf.html(cont, {
    callback: function (pdf) {
      pdf.save("myfile.pdf", {
      });
    }
  });
}