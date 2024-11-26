import { Link } from "react-router-dom";

const DetailsItem = () => {
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
                        <Link to="/about_us_logged">About Us</Link>
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



            <main>
                <div className="order-section">
                    <h3>Your Order</h3>
                    <div className="order-item">
                        <img src="/images/img/lalisa_album.png" alt="LALISA- PHOTOBOOK [SPECIAL EDITION]" />
                        <div className="order-details">
                            <p><strong>LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]</strong></p>
                            <p>Quantity: 1</p>
                        </div>
                        <p className="price">Rp615.000</p>
                    </div>
                </div>
            </main>

            <main>
                <div className="total-price">
                    <p>Total (1 Item)</p>
                    <p>Rp615.000</p>
                </div>
            </main>

            <main>
                <div className="info-section">
                    <div className="info-block">
                        <h4>Customer</h4>
                        <p>Muchamad Nurza Bayu Dhantono</p>
                        <p>muchamadnurzaba24@gmail.com</p>
                        <p>+62 895-3965-90113</p>
                    </div>
                    <div className="info-block">
                        <h4>Address</h4>
                        <p>Jl. R. Aspia, Karadenan, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16913</p>
                    </div>
                    <div className="info-block">
                        <h4>Shipping Option</h4>
                        <p>Reguler</p>
                    </div>
                </div>
            </main>

            <main>
                <table className="details-table">
                    <tbody>
                        <tr>
                            <td>Status</td>
                            <td>Shipping</td>
                            <td><Link to="/Tracking" className="details-link">Details &gt;&gt;</Link></td>
                        </tr>
                        <tr>
                            <td>Payment Method</td>
                            <td>Bank (Virtual Account)</td>
                        </tr>
                        <tr>
                            <td>Payment Status</td>
                            <td>Paid Off</td>
                        </tr>
                        <tr>
                            <td>Order Created</td>
                            <td>9/12/2024</td>
                        </tr>
                    </tbody>
                </table>
            </main>

            <main>
                <div className="order-summary">
                    <h4>Order Summary</h4>
                    <p>Subtotal (1 item) <span>Rp615.000</span></p>
                    <p>Shipping Fee <span>Rp15.000</span></p>
                    <p>Discount <span>-</span></p>
                </div>
            </main>

            <main>
                <div className="cart-total">
                    <p className="grand-total">Grand Total:</p>
                    <p className="grand-total-amount">Rp630.000</p>
                </div>
            </main>

            <main>
                <div className="buttons">
                    <Link to="/Product"><button className="buy-again">buy again</button></Link>
                    <Link to="/Review"><button className="review">Review</button></Link>
                </div>
            </main>

            <footer>
                <div className="footer-links">
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
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

export default DetailsItem;
