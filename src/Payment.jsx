import { Link } from "react-router-dom";
import "./style/Payment.css";

const Payment = () => {
  return (
    <>
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
            <li><a href="#">Poin</a></li>
            <li><a href="#">Transaction</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </div>
      </header>

      <main className="payment-content">
        <h2>Payment</h2>
        <div className="payment-box">
          <h3>Virtual Account</h3>
          <div className="account-number">4353-5406-3406-4237-5463</div>
          <p className="validity-info">
            <img
              src="/img/warning.png"
              alt="Warning"
              style={{ width: "16px", verticalAlign: "middle", marginRight: "5px" }}
            />
            Virtual Account is only valid for 1 hour
          </p>
          <div className="button-group">
            <button className="copy-button" onClick={() => window.location.href = 'payment_2.html'}>
              Copy
            </button>
            <button className="close-button">Close</button>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-links">
          <a href="#">Terms of Use</a>
          <Link to="/PrivacyPolicy">Privacy Policy</Link>
          <Link to="/CookiesPolicy">Cookie Policy</Link>
          <a href="#">Announcements</a>
        </div>
        <div className="footer-info">
          <p>
            Brand Inc. | CEO: SHABRINA ZAHRA AULIA CALL CENTER (+62)21-3452-1312
            FAX (+62)21-4242-6565
          </p>
          <p>
            ADDRESS Jl. KH. Ahmad Dahlan Kby. No.14A, RT.2/RW.1, Kramat Pela,
            Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
            12130
          </p>
          <p>© BRAND COMPANY Inc.</p>
        </div>
      </footer>
    </>
  );
};

export default Payment;
