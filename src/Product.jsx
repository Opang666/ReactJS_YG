// import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
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
        <div className="product-grid">
          <div className="product-item item1" onClick={() => window.location.href = '/Lightstick'}>
            <h3>Light Stick</h3>
            <img src="/images/img/Lightstick.png" alt="Product 1" />
          </div>
          <div className="product-item item2" onClick={() => window.location.href = '/Merchandise'}>
            <h3>Merch</h3>
            <img src="/images/img/Merch.png" alt="Product 2" />
          </div>
          <div className="product-item item3" onClick={() => window.location.href = '/Membership'}>
            <h3>Membership</h3>
            <img src="/images/img/Membership.png" alt="Product 3" />
          </div>
          <div className="product-item item4">
            <h3>Album</h3>
            <img src="/images/img/Album.png" alt="Product 4" />
          </div>
          <div className="product-item item5">
            <h3>Mini Album</h3>
            <img src="/images/img/Mini Album.png" alt="Product 5" />
          </div>
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

export default Product;
