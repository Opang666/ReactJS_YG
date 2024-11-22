import { Link } from 'react-router-dom';
import "./Product.css";

const Product = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="navbar">
          <img src="img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />
          <nav>
            <a href="home_logged.html">Home</a>
            <a href="product.html">Product</a>
            <a href="community.html">Community</a>
          </nav>
        </div>

        <button className="user-button">
          <img src="img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
        </button>

        <div className="dropdown">
          <ul>
            <li><a href="Cart.html">Cart</a></li>
            <li><a href="poin.html">Poin</a></li>
            <li><a href="transcation.html">Transaction</a></li>
            <li><a href="account.html">Profile</a></li>
            <li><a href="logout.html">Log Out</a></li>
          </ul>
        </div>
      </header>

      {/* Product Grid Section */}
      <div className="container">
        <div className="product-grid">
          <div className="product-item item1" onClick={() => window.location.href = 'light_stick.html'}>
            <h3>Light Stick</h3>
            <img src="img/Lightstick.png" alt="Product 1" />
          </div>
          <div className="product-item item2" onClick={() => window.location.href = 'merch.html'}>
            <h3>Merch</h3>
            <img src="img/Merch.png" alt="Product 2" />
          </div>
          <div className="product-item item3" onClick={() => window.location.href = 'membership.html'}>
            <h3>Membership</h3>
            <img src="img/Membership.png" alt="Product 3" />
          </div>
          <div className="product-item item4">
            <h3>Album</h3>
            <img src="img/Album.png" alt="Product 4" />
          </div>
          <div className="product-item item5">
            <h3>Mini Album</h3>
            <img src="img/Mini Album.png" alt="Product 5" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <div className="footer-links">
          <a href="#">Terms of Use</a>
          <a href="privacy.html">Privacy Policy</a>
          <a href="cookie.html">Cookie Policy</a>
          <a href="#">Announcements</a>
        </div>
        <div className="footer-info">
          <p>Brand Inc. | CEO: SHABRINA ZAHRA AULIA CALL CENTER (+62)21-3452-1312 FAX (+62)21-4242-6565</p>
          <p>
            ADDRESS Jl. KH. Ahmad Dahlan Kby. No.14A, RT.2/RW.1, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130
          </p>
          <p>© BRAND COMPANY Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product;
