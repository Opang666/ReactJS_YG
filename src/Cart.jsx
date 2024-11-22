import React from "react";
import "./Cart.css";

const Cart = () => {
  const updateQuantity = (event, change) => {
    // Implementasi logika update quantity
  };

  const removeItem = (event) => {
    // Implementasi logika remove item
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <img src="img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />
          <nav>
            <a href="home_logged.html">Home</a>
            <a href="product.html">Product</a>
            <a href="community.html">Community</a>
            <a href="about_us_logged.html">About Us</a>
            <a href="contact.html">Contact Us</a>
          </nav>
        </div>
        <button className="user-button">
          <img src="img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
        </button>
        <div className="dropdown">
          <ul>
            <li>
              <a href="Cart.html">Cart</a>
            </li>
            <li>
              <a href="poin.html">Poin</a>
            </li>
            <li>
              <a href="transcation.html">Transaction</a>
            </li>
            <li>
              <a href="account.html">Profile</a>
            </li>
            <li>
              <a href="logout.html">Log Out</a>
            </li>
          </ul>
        </div>
      </header>

      <main className="cart">
        <h1>Cart</h1>
        <p className="cart-info">
          <img src="img/warning.png" alt="Info Icon" />
          Products in carts will be deleted after 90 days (Removed sold out).
        </p>

        <div className="cart-items">
          <label className="select-all">
            <input type="checkbox" id="selectAll" />
            <span>Select all items</span>
          </label>

          {/* Item 1 */}
          <div className="cart-item" data-price="350000">
            <input type="checkbox" className="item-select" />
            <img
              src="img/BLIK MEMBERSHIP.png"
              alt="BLACKPINK GLOBAL OFFICIAL FANCLUB MEMBERSHIP"
            />
            <div className="item-details">
              <h3>BLACKPINK GLOBAL OFFICIAL FANCLUB MEMBERSHIP</h3>
              <p className="pre-order">Pre-Order</p>
            </div>
            <div className="item-controls">
              <button
                onClick={(e) => updateQuantity(e, -1)}
                className="minus-btn"
              >
                -
              </button>
              <span className="quantity">1</span>
              <button
                onClick={(e) => updateQuantity(e, 1)}
                className="plus-btn"
              >
                +
              </button>
              <span className="item-price">Rp350.000</span>
              <button onClick={(e) => removeItem(e)} className="remove-btn">
                X
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="cart-item" data-price="300000">
            <input type="checkbox" className="item-select" />
            <img src="img/Brooch.png" alt="Brooch By BabyMonster" />
            <div className="item-details">
              <h3>Brooch By BabyMonster</h3>
              <p className="pre-order">Pre-Order</p>
            </div>
            <div className="item-controls">
              <button
                onClick={(e) => updateQuantity(e, -1)}
                className="minus-btn"
              >
                -
              </button>
              <span className="quantity">1</span>
              <button
                onClick={(e) => updateQuantity(e, 1)}
                className="plus-btn"
              >
                +
              </button>
              <span className="item-price">Rp300.000</span>
              <button onClick={(e) => removeItem(e)} className="remove-btn">
                X
              </button>
            </div>
          </div>
        </div>

        <div className="cart-total">
          <span>Total</span>
          <span id="total-price">Rp0</span>
          <a href="detail_product.html" className="checkout-btn">
            Check Out
          </a>
        </div>
      </main>

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
    </div>
  );
};

export default Cart;
