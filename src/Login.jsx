import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <header>
                <img src="/public/images/img/logo_YG.png" alt="Brand Logo" className="logo" />
            </header>

            <main>
                <div className="login-container">
                    <h1>YGEntertainment Account</h1>
                    <p>Log in YGEntertainment Account</p>
            
                    <form>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" required />
                        
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" required />
                        
                        <Link to="/HomeLogged" className="login-button">Log In</Link>
                    </form>

                    <div className="links">
                        <p>Forgot Password? <Link to="/Reset" className="Reset">Log In</Link></p>
                        <p>Dont have an account? <Link to="/Regis" className="regis">Sign up</Link></p>
                    </div>

                    <div className="separator">
                        <span>OR</span>
                    </div>

                    <div className="social-login">
                        <button className="social-button facebook">
                            <img src="/public/images/img/Facebook Button.png" alt="Facebook" /> 
                        </button>
                        <button className="social-button google">
                            <img src="/public/images/img/Group.png" alt="Google" />
                        </button>
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
};

export default Login;
