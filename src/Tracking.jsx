import { Link } from "react-router-dom";
import "./style/Tracking.css";

const Tracking = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <img src="/images/img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />
                        <nav>
                            <Link to="/HomeLogged">Home</Link>
                            <Link to="/Product">Product</Link>
                            <Link to="/Community">Community</Link>
                            <Link to="/AboutUsLogged">About Us</Link>
                            <Link to="/Contact">Contact Us</Link>
                        </nav>
                </div>
                <button className="user-button">
                    <img src="/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
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

            <div className="container">
                <div className="back-title">
                    <a href="detail_item.html">
                        <img src="/images/img/kembali.png" alt="Back to Transaction" className="back-button" />
                    </a>
                    <h1>Details Tracking</h1>
                </div>

                <div className="product-header">
                    <img src="/images/img/lalisa_album.png" alt="Product Image" className="product-image" />
                        <div className="product-title">
                            LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]
                        </div>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-time">2:10<br/>8 October 2024</div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-line"></div>
                        <div className="timeline-content">Order Confirmed</div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-time">22:40<br/>7 October 2024</div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                    <div className="timeline-content">Shipping from warehouse to Harbour</div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-time">10:13<br/>7 October 2024</div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                    <div className="timeline-content">Shipping from Korea to Indonesia</div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-time">5 October 2024</div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                    <div className="timeline-content">Shipping from Harbour to Warehouse</div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-time">4 October 2024</div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                    <div className="timeline-content">Shipping from warehouse to Consumer</div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-time">2 October 2024</div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">The order was confirmed to Consumer</div>
                </div>
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

export default Tracking;