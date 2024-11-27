// import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
       <header>
                <div className="navbar">
                    <img src="/images/img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />

                    <nav>
                        <Link to="/HomeLogged">Home</Link>
                        <Link to="/Product">Product</Link>
                        <Link to="/Community">Community</Link>
                        <Link to="/AboutUsLogged">About Us</Link>
                        <Link to="/Contact">Contact Us</Link>
                    </nav>
                </div>

                <button className="user-button">
                    <img src="/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
                </button>

                <div className="dropdown">
                    <ul>
                        <li><Link to="/Cart">Cart</Link></li>
                        <li><Link to="/Point">Poin</Link></li>
                        <li><Link to="/Transaction">Transaction</Link></li>
                        <li><Link to="/AccountSetting">Profile</Link></li>
                        <li><Link to="#">Log Out</Link></li>
                    </ul>
                </div>
            </header>

      <div className="container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            Email, call, or complete the form to learn how Brand can solve your
            messaging problem
          </p>

          <div className="contact-email">info@brand.com</div>
          <div className="contact-phone">(+62)21-3452-1312</div>

          <div className="contact-sections">
            <div className="section">
              <div className="section-title">Feedback and Suggestions</div>
              <div className="section-content">
                We value your feedback and are continuously working to improve
                Brand. Your input is crucial in shaping the future of Brand.
              </div>
            </div>
            <div className="section">
              <div className="section-title">Media Inquiries</div>
              <div className="section-content">
                For media-related questions or press inquiries, please contact
                us at media@brand.com
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-header">
            <h2>Get in Touch</h2>
            <p>You can reach us anytime</p>
          </div>
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="How can we help"></textarea>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <div className="form-footer">
              By contacting us, you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </div>
          </form>
        </div>
      </div>

           <footer>
                <div className="footer-links">
                    <Link to="#">Terms of Use</Link>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                    <Link to="/CookiesPolicy">Cookie Policy</Link>
                    <Link to="#">Announcements</Link>
                </div>
                <div className="footer-info">
                    <p>Brand Inc. | CEO: SHABRINA ZAHRA AULIA CALL CENTER (+62)21-3452-1312 FAX (+62)21-4242-6565</p>
                    <p>ADDRESS Jl. KH. Ahmad Dahlan Kby. No.14A, RT.2/RW.1, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130</p>
                    <p>© BRAND COMPANY Inc.</p>
                </div>
            </footer>
    </div>
  );
};

export default Contact;
