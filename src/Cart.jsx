import { Link } from "react-router-dom";

const Cart = () => {
  const updateQuantity = (change) => {
    console.log(`Update quantity dengan perubahan: ${change}`);
  };

  const removeItem = () => {
    console.log("Item dihapus");
  };

  const calculateTotal = () => {
    const items = document.querySelectorAll(".cart-item");
    let total = 0;

    items.forEach((item) => {
      const isChecked = item.querySelector(".item-select").checked;
      const price = parseInt(item.dataset.price, 10);
      if (isChecked) total += price;
    });

    document.getElementById("total-price").textContent = `Rp${total}`;
  };

  const handleSelectChange = () => {
    calculateTotal();
  };

  return (
    <div>
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

            
      <main className="cart">
        <h1>Cart</h1>
        <p className="cart-info">
          <img src="/images/img/warning.png" alt="Info Icon" />
          Products in carts will be deleted after 90 days (Removed sold out).
        </p>
          <div className="cart-items">
            <label className="select-all">
              <input type="checkbox" id="selectAll" onChange={handleSelectChange} />
              <span>Select all items</span>
            </label>
            <div className="cart-item" data-price="350000">
              <input type="checkbox" className="item-select" onChange={handleSelectChange} />
              <img src="/images/img/BLIK MEMBERSHIP.png" alt="BLACKPINK GLOBAL OFFICIAL FANCLUB MEMBERSHIP" />
              <div className="item-details">
                <h3>BLACKPINK GLOBAL OFFICIAL FANCLUB MEMBERSHIP</h3>
                <p className="pre-order">Pre-Order</p>
              </div>
              <div className="item-controls">
                <button onClick={() => updateQuantity(-1)} className="minus-btn"> - </button>
                <span className="quantity">1</span>
                <button onClick={() => updateQuantity(1)} className="plus-btn"> + </button>
                <span className="item-price">Rp350.000</span>
                <button onClick={removeItem} className="remove-btn"> X </button>
              </div>
            </div>
          </div>
        <div className="cart-total">
          <span>Total</span>
          <span id="total-price">Rp0</span>
          <Link to="/ProductDetail" className="checkout-btn"> Check Out</Link> 
        </div>
      </main>
    </div>
  );
};

export default Cart;
