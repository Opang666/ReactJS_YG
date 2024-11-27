import { Link } from 'react-router-dom';
import "./style/AboutUs.css";

const AboutUs = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <img src="/images/img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />
                    <nav className="nav-links">
                        <Link to="/Home">Home</Link>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/Login" className="login-button">Log In</Link>
                    </nav>
                </div>
            </header>
            
            <main>
                <section className="about">
                    <h1 className="isi">About YGEntertainment.id</h1>
                    <div className="content">
                        <div className="mission">
                            <h2>Mission</h2>
                            <p>
                                Become a trusted platform for YG Entertainment fans in Indonesia to get official merchandise and the latest information about concerts, in order to bring fans closer to their favorite artists.
                            </p>
                        </div>
                        <div className="vision">
                            <h2>Vision</h2>
                            <p>
                                Providing easy and safe access for YG Entertainment fans in Indonesia to get quality official merchandise, while providing the latest information about YG concert schedules, events, and artist news. We are committed to establishing a solid fan community in Indonesia, offering a satisfying shopping experience and presenting exclusive products that can strengthen the relationship between fans and their favorite artists.
                            </p>
                        </div>
                    </div>
                </section>
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

export default AboutUs;
