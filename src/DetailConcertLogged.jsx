import { Link } from "react-router-dom";
import './style/DetailConcert.css';

const DetailConcertLogged = () => {
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
                <div className="banner-image">
                    <img src="/images/img/konser_seventeen.png" alt="Konser Seventeen" />
                </div>
            </main>

            <main>
                <div className="content">
                    <h3>SEVENTEEN</h3>
                </div>
            </main>

            <main>
                <div>
                <p><strong>SEVENTEEN - &apos;RIGHT HERE&apos; Tour</strong><br/></p>
                </div>
            </main>

            <main>
                <div>
                    <strong>JIS, Jakarta, Indonesia</strong><br/>
                </div>
            </main>

            <main>
                <div>
                    February 8, 2025
                </div>
            </main>

            <main>
                <div>
                    <p>SEVENTEEN &apos;Right Here&apos; Tour is highly anticipated, showcasing their powerful performances and recent<br/>
                    hits. Known for their synchronized choreography and engaging stage presence, this tour promises an<br/>
                    unforgettable experience for fans worldwide</p>
                </div>
            </main>

            <main>
                <div>
                    <Link to="" className="beli">Buy Ticket</Link>
                </div>
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
        </>
    );
};

export default DetailConcertLogged;