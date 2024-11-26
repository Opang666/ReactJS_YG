import { Link } from 'react-router-dom';
import "./style/Login.css";

const Reset = () => {
    return (
        <>

            <header>
                <img src="/images/img/logo_YG.png" alt="Brand Logo" className="logo" />
            </header>

            <main>
                <div className="reset-container">
                    <h1>YGEntertainment Account</h1>
                    <p>Sign Up YGEntertainment Account</p>

                    <form>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            required
                        />
                        <Link to="/ResetNext" className="ResetNext">
                            Reset
                        </Link>
                    </form>

                    <div className="links">
                        <p>
                            Enter your email, so we can send<br />
                            verification to reset your password
                        </p>
                    </div>
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

export default Reset;
