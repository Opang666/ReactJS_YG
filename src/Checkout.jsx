import { Link } from "react-router-dom";

const Checkout = () => {
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
                        <Link to="/Product">Product</Link>
                        <Link to="/Community">Community</Link>
                        <Link to="/AboutUsLogged">About Us</Link>
                        <Link to="/Contact">Contact Us</Link>
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

            <div className="checkout-container">
                <h1>Checkout</h1>

                <div className="pre-order-banner">
                    <div className="po-icon-container">
                        <img src="/images/img/po.png" alt="PO Icon" className="po-icon" />
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
                        <img src="/images/img/BLIK MEMBERSHIP.png" alt="BLACKPINK Membership" />
                        <div className="item-info">
                            <h3>BLACKPINK GLOBAL OFFICIAL FANCLUB BLINK MEMBERSHIP</h3>
                            <p>Quantity: 1</p>
                            <p className="item-price">Rp350.000</p>
                        </div>
                    </div>

                    <h3>Total (1 Item)</h3>
                    <p className="total-price">Rp350.000</p>

                    <div className="customer-info">
                        <div className="info-section">
                            <h3>Customer <button>Edit</button></h3>
                            <p>Muchamad Nurza Buya Dhantono</p>
                            <p>muchamaddhantono@gmail.com</p>
                            <p>+62 895-3965-90113</p>
                        </div>
                        <div className="info-section">
                            <h3>Address <button>Edit</button></h3>
                            <p>Jl. R. Apsia, Karadenan, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16913</p>
                        </div>
                        <div className="info-section">
                            <h3>Shipping Option <button>Choose</button></h3>
                            <p>Reguler</p>
                        </div>
                    </div>

                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <p>Subtotal (1 item): <span>Rp350.000</span></p>
                        <p>Shipping Fee: <span>Rp80.000</span></p>
                        <p>Discount: <span>-</span></p>
                    </div>

                    <div className="cart-total">
                        <p className="grand-total">Grand Total:</p>
                        <p className="grand-total-amount">Rp430.000</p>
                    </div>
                    
                    
                    <div className="payment-method">
                        <h2>Payment Method</h2>
                        <label><input type="radio" name="payment" /> Bank (Virtual Account)</label>
                        <label><input type="radio" name="payment" /> ShopeePay</label>
                        <label><input type="radio" name="payment" /> GoPay</label>
                        <label><input type="radio" name="payment" /> Dana</label>
                        <label><input type="radio" name="payment" /> LinkAja</label>
                    </div>

                    <Link to="/Payment" className="pay-button">Pay</Link>
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

export default Checkout;