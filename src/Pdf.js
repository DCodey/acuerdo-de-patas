import { jsPDF } from "jspdf";

const download =(content="<p>aqui ira el contenido del pdf</p>")=>{
    const doc = new jsPDF("p","pt","a4");
    doc.html(content, {
    callback: function (doc) {
      doc.save("acuerdo de patas.pdf");
    }
  })
  console.log('descargando pdf')
};

export const PdfDownload = ()=>{
  download();
}