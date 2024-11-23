import { Link } from "react-router-dom";

const Payment2 = () => {
    return (
        <>
        <body>
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
                        <li><a href="#">Poin</a></li>
                        <li><a href="#">Transaction</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Log Out</a></li>
                    </ul>
                </div>
            </header> 

            <main className="payment-content">
                <h2>Payment</h2>
                    <div className="payment-box">
                        <h3>Payment Confirm</h3>
                    </div>
                    <div className="success-image">
                        <img src="/public/images/img/sukses.png" className="animated-image" alt="Success" />
                    </div>
                    <h1 id="point">+350 Point</h1>
            </main>

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
        </body>
        </>
    );
};

export default Payment2;