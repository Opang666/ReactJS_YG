import { Link } from "react-router-dom";

const NewsDetailLogged = () => {
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
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                </div>

                <button className="user-button">
                    <img src="/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
                </button>

                <div className="dropdown">
                    <ul>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="#">Poin</Link></li>
                        <li><Link to="#">Transaction</Link></li>
                        <li><Link to="#">Profile</Link></li>
                        <li><Link to="#">Log Out</Link></li>
                    </ul>
                </div>
            </header>

            <h3 className="center-heading">BLACKPINK is Comeback!!!</h3>
                <div className="banner-image">
                    <img src="/images/img/fullBP.jpeg" alt="BLACKPINK World Tour Banner" />
                </div>

                <div className="content">
                    <p>YG Entertainment recently announced that BLACKPINK will be making a highly anticipated comeback in 2025, accompanied by a world tour. This exciting news has thrilled fans who have been eagerly awaiting new releases since the group last global activities. Known for hits like How You Like That and Kill This Love, BLACKPINK is set to bring fresh music to the stage, further solidifying their presence in the global music scene. Fans worldwide are looking forward to this new era, anticipating both the sound and visual experience that BLACKPINK will deliver.</p>
                    <p>The upcoming world tour is expected to be one of BLACKPINK biggest to date, featuring grand production and the energetic performances they are known for. Returning to international stages, BLACKPINK aims not only to captivate long-time fans but also to expand their influence in the global K-pop industry. Fans are eagerly awaiting more details about concert dates, locations, and ticketing, looking forward to experiencing their idols live. This comeback and tour promise to be monumental events, showcasing BLACKPINK growth and musical evolution.</p>
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

export default NewsDetailLogged;