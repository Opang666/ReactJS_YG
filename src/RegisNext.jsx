import { Link } from "react-router-dom";
import "./style/Login.css";

const togglePassword = (id) => {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
};

const RegisNext = () => {
    return (
        <>
            <header>
                <img src="/public/images/img/logo_YG.png" alt="Brand Logo" className="logo" />
            </header>

            <main>
                <div className="login-container">
                    <div className="header-with-icon">
                        <h1>YGEntertainment Account</h1>
                    </div>
            
                    <p>Create your YGEntertainment account</p>
                    <form>
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input type="password" id="password" name="password" placeholder="Enter Your Password" required />
                            <i className="fas fa-eye toggle-password" onClick={() => togglePassword('password')}></i>
                        </div>

                        <label htmlFor="confirm-password">Confirmation Password</label>    
                        <div className="password-container">
                            <input type="password" id="confirm-password" name="confirm_password" placeholder="Enter Your Password" required />
                            <i className="fas fa-eye toggle-password" onClick={() => togglePassword('confirm-password')}></i>
                        </div>

                        <Link to="/VerifikasiEmail" className="login-button">
                            Confirm
                        </Link>
                    </form>

                    <div className="links">
                        <p>Already have an account? <Link to="/Login" className="Login">Log In</Link></p>
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
                    <p>Brand Inc. | CEO: SHABRINA ZAHRA AULIA CALL CENTER (+62)21-3452-1312 FAX (+62)21-4242-6565</p>
                    <p>ADDRESS Jl. KH. Ahmad Dahlan Kby. No.14A, RT.2/RW.1, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130</p>
                    <p>© BRAND COMPANY Inc.</p>
                </div>
            </footer>
        </>
    );
}

export default RegisNext;
