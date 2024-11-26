import { Link } from "react-router-dom";
import "./style/Login.css";

const Regis = () => {
    return (
        <>
            <header>
                <img src="/images/img/logo_YG.png" alt="Brand Logo" className="logo" />
            </header>

            <main>
                <div className="login-container">
                    <h1>YGEntertainment Account</h1>
                    <p>Sign Up YGEntertainment Account</p>
            
                    <form>
                        <label htmlFor="name">Fullname</label>
                        <input type="name" id="name" placeholder="Enter Fullname" required />

                        <label htmlFor="phone number">Phone Number</label>
                        <input type="number" id="number" placeholder="Enter Phone Number" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" required />

                        <Link to="/RegisNext" className="Regis">Next</Link>
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

export default Regis;
