const DetailsItem = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <img src="/public/images/img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />
                    <nav>
                        <a href="home_logged.html">Home</a>
                        <a href="product.html">Product</a>
                        <a href="community.html">Community</a>
                        <a href="about_us_logged.html">About Us</a>
                        <a href="contact.html">Contact Us</a>
                    </nav>
                </div>
                <button className="user-button">
                    <img src="/public/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
                </button>
                
                <div className="dropdown">
                    <ul>
                        <li><a href="Cart.html">Cart</a></li>
                        <li><a href="poin.html">Poin</a></li>
                        <li><a href="transaction.html">Transaction</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Log Out</a></li>
                    </ul>
                </div>
            </header>

            <div className="order-section">
                <h3>Your Order</h3>
                <div className="order-item">
                    <img src="/public/images/img/lalisa_album.png" alt="LALISA- PHOTOBOOK [SPECIAL EDITION]" />
                    <div className="order-details">
                        <p><strong>LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]</strong></p>
                        <p>Quantity: 1</p>
                    </div>
                    <p className="price">Rp615.000</p>
                </div>
            </div>

            <hr />

            <div className="total-price">
                <p>Total (1 Item)</p>
                <p>Rp615.000</p>
            </div>

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

            <table className="details-table">
                <tbody>
                    <tr>
                        <td>Status</td>
                        <td>Shipping</td>
                        <td><a href="tracking.html" className="details-link">Details &gt;&gt;</a></td>
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

            <div className="order-summary">
                <h4>Order Summary</h4>
                <p>Subtotal (1 item) <span>Rp615.000</span></p>
                <p>Shipping Fee <span>Rp15.000</span></p>
                <p>Discount <span>-</span></p>
            </div>

            <div className="cart-total">
                <p className="grand-total">Grand Total:</p>
                <p className="grand-total-amount">Rp630.000</p>
            </div>

            <div className="buttons">
                <a href="product.html"><button className="buy-again">buy again</button></a>
                <a href="review.html"><button className="review">Review</button></a>
            </div>

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
