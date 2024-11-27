import { useState } from "react";
import "./Merchandise.css";
import { Link } from "react-router-dom";

const Merchandise = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const products = [
    { title: "The Game Photocard Collection", price: "Rp500.000", image: "./IMG MERCHANDISE/The Game Photocard Collection.png" },
    { title: "WINNER 4th MINI ALBUM", price: "Rp565.000", image: "./IMG MERCHANDISE/WINNER 4th MINI ALBUM.png" },
    { title: "WINNER 4th MINI ALBUM [HOLIDAY] (PHOTOBOOK ver.)", price: "Rp323.000", image: "./IMG MERCHANDISE/WINNER 4th MINI ALBUM [HOLIDAY] (PHOTOBOOK ver.).png" },
    { title: "4th MINI ALBUM [HOLIDAY] KiT ALBUM", price: "Rp292.000", image: "./IMG MERCHANDISE/4th MINI ALBUM [HOLIDAY] KiT ALBUM.png" },
    { title: "BLACKPINK THE GAME OST [THE GIRLS] Reve ver. (SET)", price: "Rp324.000", image: "./IMG MERCHANDISE/BLACKPINK THE GAME OST [THE GIRLS] Reve ver. (SET).png" },
    { title: "10th ANNIVERSARY FIGURE ALBUM (CUPID VER.)", price: "Rp464.000", image: "./IMG MERCHANDISE/10th ANNIVERSARY FIGURE ALBUM (CUPID VER.).png" },
    { title: "3rd MINI ALBUM [LOVE EPISODE]", price: "Rp648.000", image: "./IMG MERCHANDISE/3rd MINI ALBUM [LOVE EPISODE].png" },
    { title: "1st FULL ALBUM [DRIP] BANDANA Ver. (Limited Edition)", price: "Rp298.000", image: "./IMG MERCHANDISE/1st FULL ALBUM [DRIP] BANDANA Ver. (Limited Edition).png" },
    { title: "1st FULL ALBUM [DRIP] ZIP LOCK Ver.  BINDER Ver. Set", price: "Rp500.000", image: "./IMG MERCHANDISE/1st FULL ALBUM [DRIP] ZIP LOCK Ver.  BINDER Ver. Set.png" },
    { title: "2nd MINI ALBUM THE SECOND STEP CHAPTER TWO DIGIPACK ver. (SET)", price: "Rp1.365.000", image: "./IMG MERCHANDISE/2nd MINI ALBUM THE SECOND STEP CHAPTER TWO DIGIPACK ver. (SET).png" },
    { title: "2ND FULL ALBUM [REBOOT] PHOTOBOOK VER. (Set)", price: "Rp750.000", image: "./IMG MERCHANDISE/2ND FULL ALBUM [REBOOT] PHOTOBOOK VER. (Set).png" },
    { title: "Eun Ji Won - Album Vol. 6 [G1]", price: "Rp235.000", image: "./IMG MERCHANDISE/Eun Ji Won - Album Vol. 6 [G1].jpg" },
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
                        src="/images/img/logo_YG.png"
                        alt="YG Entertainment Logo"
                        className="logo"
                    />

                    <nav>
                        <Link to="/HomeLogged">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/Community">Community</Link>
                        <Link to="/AboutUsLogged">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                </div>

                <button className="user-button">
                    <img
                        src="/images/img/profile.png"
                        alt="User Icon"
                        className="icon-img"
                    />{" "}
                    Nurzaba
                </button>

                <div className="dropdown">
                    <ul>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="#">Poin</Link>
                        </li>
                        <li>
                            <Link to="#">Transaction</Link>
                        </li>
                        <li>
                            <Link to="#">Profile</Link>
                        </li>
                        <li>
                            <Link to="#">Log Out</Link>
                        </li>
                    </ul>
                </div>
            </header>

      <div className="container">
        <div className="title-container">
          <h1>Album</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search Album"
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
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                    <Link to="/CookiesPolicy">Cookie Policy</Link>
                    <a href="#">Announcements</a>
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

export default Merchandise;
