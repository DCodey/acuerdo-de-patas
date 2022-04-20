import React from "react";
import Link from '@mui/material/Link';

function Footer() {
  return (
    <div className="footer-basic">
      <footer className="container">
        <div className="social">
          <a href="https://github.com/DCodey/acuerdo-de-patas" target="_blank" rel="noreferrer"><i className="icon ion-social-github"></i></a>
        </div>
        <p className="copyright">
          Desarrollado con <span >❤</span> por:
          <Link href="https://www.linkedin.com/in/nadia-men/" target="_blank" rel="noreferrer" className="link"> Nadia</Link>,
          <Link href="https://candidato.computrabajo.com.pe/candidate/cv/edit" target="_blank" rel="noreferrer" className="link"> Alvaro</Link>,
          <Link href="https://www.linkedin.com/in/jiancarlos-marcos-241528209/" target="_blank" rel="noreferrer" className="link"> Jian</Link>,
          <Link href="https://www.linkedin.com/in/jairo-espinoza-quispe/" target="_blank" rel="noreferrer" className="link"> Jairo </Link>y
          <Link href="https://www.linkedin.com/in/nadia-men/" target="_blank" rel="noreferrer" className="link"> Carlos</Link>
        </p>
      </footer>
    </div>
  );
}
export default Footer;