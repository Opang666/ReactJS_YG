import React, { useState } from "react";
import "./Merchandise.css";

const Merchandise = () => {
  const [searchTerm, setSearchTerm
    
  ] = useState("");
  const products = [
    { title: "Light Stick", desc: "A versatile light stick for your performances", image: "./IMG MERCHANDISE/Lightstick.png" },
    { title: "Merch", desc: "Official merchandise to show your support", image: "./IMG MERCHANDISE/Merch.png" },
    { title: "Membership", desc: "Join our community and get exclusive benefits", image: "./IMG MERCHANDISE/Membership.png"},
    { title: "Album", desc: "Get the latest album from your favorite artist", image: "./IMG MERCHANDISE/Album.png"},
    { title: "Mini Album", desc: "Compact version of the latest album release", image: "./IMG MERCHANDISE/Mini Album.png" },
   
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header>
        <div className="navbar">
          <img
            src="./IMG MERCHANDISE/YG.png"
            alt="YG Entertainment Logo"
            className="logo"
          />
          <nav>
            <a href="home_logged.html">Home</a>
            <a href="product.html">Product</a>
            <a href="community.html">Community</a>
            <a href="about_us_logged.html">About Us</a>
            <a href="contact.html">Contact Us</a>
          </nav>
        </div>
        <button
          className="user-button btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="./IMG MERCHANDISE/icon.png"
            alt="User Icon"
            className="icon-img"
          />
          Nurzaba
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="Cart.html">
            Cart
          </a>
          <a className="dropdown-item" href="poin.html">
            Poin
          </a>
          <a className="dropdown-item" href="transcation.html">
            Transaction
          </a>
          <a className="dropdown-item" href="account.html">
            Profile
          </a>
          <a className="dropdown-item" href="logout.html">
            Log Out
          </a>
        </div>
      </header>

      <div className="container">
        <div className="title-container">
          <h1>Product</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-links">
          <a href="#">Terms of Use</a>
          <a href="privacy.html">Privacy Policy</a>
          <a href="cookie.html">Cookie Policy</a>
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

export default Merchandise;
