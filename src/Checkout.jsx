import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <>
        <header>
            <div className="navbar">
                    <img
                        src="/public/images/img/logo_YG.png"
                        alt="YG Entertainment Logo"
                        className="logo"
                    />

                    <nav>
                        <Link to="/HomeLogged">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/community">Community</Link>
                        <Link to="/about_us_logged">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                </div>

                <button className="user-button">
                    <img
                        src="/public/images/img/profile.png"
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

            <div className="checkout-container">
                <h1>Checkout</h1>
            </div>

            <div className="pre-order-banner">
                <div className="po-icon-container">
                    <img src="/public/images/img/po.png" alt="PO Icon" className="po-icon" />
                    <h3>For Pre-Order</h3>
                </div>
                <p>
                    <span className="shipping-text">Scheduled Shipping Start Date:</span>
                    <span className="shipping-dates">Nov 21 2024 - Nov 28 2024</span>
                </p>
            </div>

            <div className="order-details">
                <h2>Your Order</h2>
                    <div className="order-item">
                        <img src="/public/images/img/BLIK MEMBERSHIP.png" alt="BLACKPINK Membership" />
                        <div className="item-info">
                            <h3>BLACKPINK GLOBAL OFFICIAL FANCLUB BLINK MEMBERSHIP</h3>
                            <p>Quantity: 1</p>
                            <p className="item-price">Rp350.000</p>
                        </div>
                    </div>
            </div>
            <main>
                <h3>Total (1 Item)</h3>
                    <p className="total-price">Rp350.000</p>
            </main>

        </>
    );
};

export default Checkout;