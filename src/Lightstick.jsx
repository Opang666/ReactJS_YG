import React, { useState } from "react";
import "./Lightstick.css";

const Lightstick = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      title: "Treasure Official Light Stick",
      price: "Rp.505.575",
      image: "./IMG LIGHTSTICK/Treasure Official Light Stick.jpg",
    },
    {
      title: "BABYMONSTER OFFICIAL LIGHT STICK",
      price: "Rp.583.356",
      image: "./IMG LIGHTSTICK/BABYMONSTER OFFICIAL LIGHT STICK.png",
    },
    {
      title: "AKMU LIGHT STICK",
      price: "Rp.337.050",
      image: "./IMG LIGHTSTICK/[10VE] AKMU LIGHT STICK.png",
    },
    {
      title: "Black Pink OFFICIAL LIGHT STICK ver.2",
      price: "Rp.505.575",
      image: "./IMG LIGHTSTICK/OFFICIAL LIGHT STICK ver.2.png",
    },
    {
      title: "WINNER OFFICIAL LIGHT STICK (VER.2)",
      price: "Rp.259.269",
      image: "./IMG LIGHTSTICK/[WINNER] OFFICIAL LIGHT STICK (VER.2).png",
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
          <img
            src="./IMG LIGHTSTICK/YG.png"
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
            src="./IMG LIGHTSTICK/icon.png"
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
          <h1>Lightstick</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search Merch"
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

export default Lightstick;
