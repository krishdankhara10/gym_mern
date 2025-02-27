import Header from "./Header";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaLinkedin,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col ">
            <h4 className="ps-4">Info</h4>
            <ul className="links">
              <li><a href="/About">About Us</a></li>
              <li><a href="/faculty">Our Faculty</a></li>
              <li><a href="/contact">Contact us</a></li>
              <li><a href="/Buyplan">Courses</a></li>
              <li><a href="/Gallery">Collections</a></li>
            </ul>
          </div>
          <div className="footer-col f_sec2">
            <h4 className="ps-4">Explore</h4>
            <ul className="links">
              <li><a href="#">Free Designs</a></li>
              <li><a href="#">Latest Designs</a></li>
              <li><a href="#">Popular Designs</a></li>
              <li><a href="#">Art Skills</a></li>
              <li><a href="#">New Uploads</a></li>
            </ul>
          </div>
          <div className="footer-col f_sec">
            <h4 className="ps-4 ">Legal</h4>
            <ul className="links">
              <li><a href="#">Customer Agreement</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Media Kit</a></li>
            </ul>
          </div>
          <div className="footer-col f_text">
            <h4>Newsletter</h4>
            <p>Made By krish Dankhara..
              Subscribe to our newsletter for a weekly dose
              of news, updates, helpful tips, and
              exclusive offers.
            </p>
            {/* <form action="#">
              <input type="text" placeholder="Your email" required />
              <button type="submit">SUBSCRIBE</button>
            </form> */}
           <div className='social_icon'>
              <span className="icone_border span1">
                <a href="https://www.facebook.com" className="text-white fs-4 px-1 icon_h">
                  <FaSquareFacebook />
                </a>
              </span>
              <span className="icone_border">
                <a href="https://twitter.com/i/flow/login" className="text-white fs-4 px-1 icon_h">
                  <FaSquareXTwitter />
                </a>
              </span>
              <span className="icone_border">
                <a href="https://web.whatsapp.com" className="text-white fs-4 px-1 icon_h">
                  <FaSquareWhatsapp />
                </a>
              </span>
              <span className="icone_border">
                <a href="https://www.instagram.com/accounts/login" className="text-white fs-4 px-1 icon_h">
                  <FaSquareInstagram />
                </a>
              </span>
              <span className="icone_border">
                <a href="https://www.linkedin.com/login" className="text-white fs-4 px-1 icon_h">
                  <FaLinkedin />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}