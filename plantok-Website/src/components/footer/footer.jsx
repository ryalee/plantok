import './footerStyle.css'; 

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="social-links">
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
      </div>

      <div className="links">
        <a href="#">FAQ</a>
        <a href="#">Info</a>
        <a href="#">Contact</a>
      </div>
    </div>
 );
}