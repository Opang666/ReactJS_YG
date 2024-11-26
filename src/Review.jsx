import { Link } from "react-router-dom";
import "./style/Review.css";

const Review = () => {
    return (
        <>
            <div>
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
                            <li><a href="poin.html">Poin</a></li>
                            <li><a href="transaction.html">Transaction</a></li>
                            <li><a href="account.html">Profile</a></li>
                            <li><a href="#">Log Out</a></li>
                        </ul>
                    </div>
                </header>

                <div className="container">
                    <div className="back-title">
                        <a href="Transaction.html">
                            <img src="/images/img/kembali.png" alt="Back to Transaction" className="back-button" />
                        </a>
                        <h1>Review</h1>
                    </div>

                    <div className="product-review">
                        <div className="product-info">
                            <img src="/images/img/lalisa_album.png" alt="LISA -LALISA- PHOTOBOOK" className="product-image" />
                            <span className="product-title">LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]</span>
                        </div>
        
                        <div className="rating-section">
                            <h3>Give Our Product Rating</h3>
                            <div className="stars">
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                            </div>
                        </div>
        
                        <div className="review-section">
                            <h3>Leave Us Review</h3>
                            <textarea placeholder="Write your review here..."></textarea>
                        </div>
        
                        <button className="submit-button">Submit</button>
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
            </div>
        </>
    );
};

export default Review;
