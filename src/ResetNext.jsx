import { Link } from "react-router-dom";
import "./style/Login.css";

const ResetNext = () => {
    // Fungsi togglePassword
    const togglePassword = (id) => {
        const passwordInput = document.getElementById(id);
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    };

    return (
        <>
            <header>
                <img src="/images/img/logo_YG.png" alt="Brand Logo" className="logo" />
            </header>

            <main>
                <div className="reset-container">
                    <div className="header-with-icon">
                        <h1>YGEntertainment Account</h1>
                    </div>
                    <p>Reset your password</p>
                    <form action="submit_signup.html" method="POST">
                        <label htmlFor="password">New Password</label>
                        <div className="password-container">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Your Password"
                                required
                            />
                            <i
                                className="fas fa-eye toggle-password"
                                onClick={() => togglePassword("password")}
                            ></i>
                        </div>

                        <label htmlFor="confirm-password">New Confirmation Password</label>
                        <div className="password-container">
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm_password"
                                placeholder="Enter Your Password"
                                required
                            />
                            <i
                                className="fas fa-eye toggle-password"
                                onClick={() => togglePassword("confirm-password")}
                            ></i>
                        </div>

                        {/* Ganti onClick dengan Link */}
                        <Link to="/Login" className="ResetNext">
                            Reset
                        </Link>
                    </form>

                    <div className="links">
                        <p>
                            Your old password will be replaced
                            <br />
                            with a new password for future use
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

export default ResetNext;
