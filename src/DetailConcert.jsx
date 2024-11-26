import { Link } from "react-router-dom";


const DetailConcert = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <img src="/images/img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />
                    <nav className="nav-links">
                        <Link to="/Home">Home</Link>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/login" className="login-button">Log In</Link>
                    </nav>
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

export default DetailConcert;