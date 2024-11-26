import { Link } from "react-router-dom";
import "./style/CookiesPolicy.css"

const CookiesPolicy = () => {
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

            <h1 className="title">Cookies Policy</h1>
            <div className="container">
                <p className="update-date">Last Updated: [August 28, 2024]</p>
                <p className="intro">
                    This Cookie Policy explains how YGConnect (https://www.ygconnect.com)
                    uses cookies and similar tracking technologies to recognize you when you
                    visit our website. By using our site, you consent to our use of cookies
                    in accordance with this policy.
                </p>

                <div className="policy-section">
                    <h2>1. What Are Cookies</h2>
                    <p>
                        Cookies are small files that are placed on your device to help us
                        improve your experience on our site. Cookies allow us to recognize you,
                        enhance your browsing experience, and understand your preferences.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>2. Types of Cookies We Use</h2>
                    <ul>
                        <li>
                            Essential Cookies: These cookies are necessary for the operation
                            of our website, enabling basic functions like navigation.
                        </li>
                        <li>
                            Performance and Analytics Cookies: These cookies help us understand
                            how users interact with our website by collecting anonymous information.
                            We use this data to improve our website performance.
                        </li>
                        <li>
                            Functional Cookies: These cookies allow us to remember your preferences
                            and settings, enhancing your experience.
                        </li>
                        <li>
                            Targeting/Advertising Cookies: With your consent, we may use cookies to
                            deliver advertisements that are relevant to your interests.
                        </li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>3. Managing Cookies</h2>
                    <p>
                        You can manage your cookie preferences by adjusting your browser settings
                        to accept or reject cookies. However, please note that disabling certain
                        cookies may impact your experience on our website.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>4. Contact Us</h2>
                    <p>
                        If you have questions or concerns about this Cookies Policy, you can
                        contact us at:
                    </p>
                    <p>
                        Address: Jl. KH. Ahmad Dahlan Kby. No.14A, RT.2/RW.1, Kramat Pela, Kec. Kby. Baru,
                        Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130
                        <br />
                        Phone: (021-3452-1312)
                    </p>
                </div>

                <div className="policy-section">
                    <h2>5. Updates to This Policy</h2>
                    <p>
                        We may update this Cookies Policy periodically. The latest version
                        will be posted on our website, with the date of last revision indicated.
                    </p>
                </div>
            </div>

            <footer className="footer">
                <p>Terms of Use | Privacy Policy | Cookie Policy | Announcements</p>
                <p>
                    Brand Inc | CEO: SHARINNA ZAHRA | CALL CENTER (+6221)-5432-1123 FAX: (+6221)-4324-6565
                </p>
                <p>
                    ADDRESS: Jl. KH. Ahmad Dahlan No. 10-A, RT.2/RW.5, Kramat Pela,
                    Kec. Kebayoran Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130
                </p>
                <p>©️ BRAND COMPANY Inc.</p>
            </footer>
        </>
    );
};

export default CookiesPolicy;
