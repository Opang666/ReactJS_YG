import "./style/Review.css";

const Review = () => {
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
                            <li><a href="poin.html">Poin</a></li>
                            <li><a href="transaction.html">Transaction</a></li>
                            <li><a href="account.html">Profile</a></li>
                            <li><a href="#">Log Out</a></li>
                        </ul>
                    </div>
                </header>

                <div className="container" />
                    <div className="back-title">
                        <a href="Transaction.html">
                            <img src="/public/images/img/kembali.png" alt="Back to Transaction" className="back-button" />
                        </a>
                        <h1>Review</h1>
                    </div>

                <div className="product-review">
                    <div className="product-info">
                        <img src="/public/images/img/lalisa_album.png" alt="LISA -LALISA- PHOTOBOOK" className="product-image" />
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
        </body>
        </>
    );
};

export default Review;