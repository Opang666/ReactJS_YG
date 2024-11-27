import { useState } from "react";
import { Link } from "react-router-dom";

const Membership = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      title: "TRUME MEMBERSHIP",
      price: "Rp.80.000",
      image: "/images/img/member_trea.png",
    },
    {
      title: "MONSTIEZ MEMBERSHIP",
      price: "Rp.80.000",
      image: "/images/img/member_bm.png",
    },
    {
      title: "AKKADEMY MEMBERSHIP",
      price: "Rp.80.000",
      image: "/images/img/member_akmu.png",
    },
    {
      title: "BLINK MEMBERSHIP",
      price: "Rp.80.000",
      image: "/images/img/member_bp.png",
    },
    {
      title: "INNER CIRCLE MEMBERSHIP",
      price: "Rp.80.0000",
      image: "/images/img/member_winner.png",
    },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <li><Link to="/Point">Poin</Link></li>
            <li><Link to="/Transaction">Transaction</Link></li>
            <li><Link to="/AccountSetting">Profile</Link></li>
            <li><Link to="#">Log Out</Link></li>
          </ul>
        </div>
      </header>

      <div className="container">
        <div className="title-container">
          <h1>Membership</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search Membership"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))}
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
    </>
  );
};

export default Membership;
