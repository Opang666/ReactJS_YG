import { Link } from 'react-router-dom';
import "./style/Login.css";

const VerifikasiEmail = () => {
    return (
        <>
            <header>
                <img src="/images/img/logo_YG.png" alt="Brand Logo" className="logo" />
            </header>

            <main>
                <div className="login-container">
                    <div className="header-with-icon">
                        <h1>YGEntertainment Account</h1>
                    </div>

                    <p>Create your YGEntertainment account</p>

                    <div className="code-inputs">
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                    </div>

                    <p className="change-email-text">
                        Want to Change Your Email Address?{" "}
                        <Link to="/Login">Change here</Link>
                    </p>

                    <form>
                        <Link to="/Login" className="login-button">
                            Confirm
                        </Link>
                    </form>

                    <div className="links">
                        <p>Resend Code</p>
                    </div>
                </div>
            </main>

            <footer>
                <div className="footer-links">
                    <Link to="/terms">Terms of Use</Link>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                    <Link to="/CookiesPolicy">Cookie Policy</Link>
                    <Link to="/announcements">Announcements</Link>
                </div>

                <div className="footer-info">
                    <p>
                        Brand Inc. | CEO: SHABRINA ZAHRA AULIA CALL CENTER
                        (+62)21-3452-1312 FAX (+62)21-4242-6565
                    </p>
                    <p>
                        ADDRESS Jl. KH. Ahmad Dahlan Kby. No.14A, RT.2/RW.1,
                        Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan,
                        Daerah Khusus Ibukota Jakarta 12130
                    </p>
                    <p>© BRAND COMPANY Inc.</p>
                </div>
            </footer>
        </>
    );
};

export default VerifikasiEmail;
