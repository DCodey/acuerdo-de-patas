import './../App.css'
import { jsPDF } from "jspdf";

const doc = new jsPDF("p","pt","a4");

const downloadPdf = () => {
  doc.html(document.querySelector('#content'), {
    callback: function () {
      doc.save("a4.pdf");
    }
  })
}
const viewPdf = () => {
  console.log('mostrando en pantalla')
}

const PdfDownload = ({contenido}, firma='firma', action='download') => {
  <div id="content" className="container">
    <h1 className='text-center'>Acuerdo de Patas</h1>
    <div>
      {contenido}
    </div>
    <div>
      {firma}
    </div>
  </div>
  {
    switch (action) {
      case 'download': downloadPdf()
        break;
      case 'view': viewPdf()
        break;
      default: downloadPdf()
        break;
    }
  }
}
export default PdfDownload;
