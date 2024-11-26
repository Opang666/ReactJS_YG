import { Link } from "react-router-dom";

const AccountSetting = () => {
    return (
        <div>
            <header>
                <div className="navbar">
                    <img
                        src="/images/img/logo_YG.png"
                        alt="YG Entertainment Logo"
                        className="logo"
                    />
                    <nav>
                        <Link to="/HomeLogged">Home</Link>
                        <Link to="/Product">Product</Link>
                        <Link to="/Community">Community</Link>
                        <Link to="/AboutUsLogged">About Us</Link>
                        <Link to="/Contact">Contact Us</Link>
                    </nav>
                </div>
                <button className="user-button">
                    <img
                        src="/images/img/profile.png"
                        alt="User Icon"
                        className="icon-img"
                    />
                    Nurzaba
                </button>
                <div className="dropdown">
                    <ul>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="#">Poin</Link></li>
                        <li><Link to="#">Transaction</Link></li>
                        <li><Link to="#">Profile</Link></li>
                        <li><Link to="#">Log Out</Link></li>
                    </ul>
                </div>
            </header>

            <div className="profile-container">
                <div className="profile-header">
                    <img src="/images/img/pp_alun.png" alt="Profile Picture" className="profile-picture" />
                    <div className="profile-info">
                        <h2>Muchamad Nurza Bayu Dhantono</h2>
                        <p>muchamadnurza24@gmail.com</p>
                    </div>
                    <button className="edit-button">Edit</button>
                </div>

                <div className="profile-details">
                    <div className="detail">
                        <label>Full Name</label>
                        <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="detail">
                        <label>Nick Name</label>
                        <input type="text" placeholder="Nick Name" />
                    </div>
                    <div className="detail">
                        <label>Gender</label>
                        <input type="text" placeholder="Gender" />
                    </div>
                    <div className="detail">
                        <label>Country</label>
                        <input type="text" placeholder="Country" />
                    </div>
                    <div className="detail">
                        <label>Language</label>
                        <input type="text" placeholder="Language" />
                    </div>
                    <div className="detail">
                        <label>Time Zone</label>
                        <input type="text" placeholder="Time Zone" />
                    </div>
                </div>

                <div className="email-entry">
                    <img src="/images/img/sms.png" alt="Email Icon" className="email-icon" />
                    <div className="email-info">
                        <p>naufalganteng123@gmail.com</p>
                        <small>1 month ago</small>
                    </div>
                </div>
                <button className="add-email-button">+Add Email Address</button>
            </div>

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
        </div>
    );
};

export default AccountSetting;
