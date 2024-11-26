import { Link } from "react-router-dom";

const Point = () => {
    // Fungsi untuk menyalin teks ke clipboard
    const copied = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Coupon code copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };

    return (
        <>
            <header>
                <div className="navbar">
                    <img src="/images/img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />

                    <nav>
                        <Link to="/HomeLogged">Home</Link>
                        <Link to="/Product">Product</Link>
                        <Link to="/Community">Community</Link>
                        <Link to="/about_us_logged">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                </div>

                <button className="user-button">
                    <img src="/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
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

            <main>
                <div className="main">
                    <section className="tier-status">
                        <div className="status">
                            <p>Tier Status</p>
                            <h2>Bronze</h2>
                        </div>
                        <div className="poin">
                            <p className="point-balance">Point Balance</p>
                            <h3>63</h3>
                        </div>
                    </section>
                </div>

                <section className="available-coupons">
                    <h4>Available Coupons</h4>
                    <div className="coupon">
                        <span>Rp50.000</span>
                        <input type="text" value="rwrd456" readOnly />
                        <button 
                            className="myButton" 
                            onClick={() => copied("rwrd456")}
                        >
                            Copy
                        </button>
                    </div>
                    <hr />
                    <div className="coupon">
                        <span>Rp50.000</span>
                        <input type="text" value="rwrd456" readOnly />
                        <button 
                            className="myButton" 
                            onClick={() => copied("rwrd456")}
                        >
                            Copy
                        </button>
                    </div>
                </section>
            </main>

            <main>
                <section className="redeem-rewards">
                    <h4>Redeem Points For Rewards</h4>
                        <div className="reward-images">
                            <img src="/images/img/keyring.png" alt="Reward 1" />
                            <img src="/images/img/Ballcap.png" alt="Reward 2" />
                            <img src="/images/img/Brooch.png" alt="Reward 3" />
                        </div>
                </section>
            </main>

            <main>
            <section className="points-activity">
                <h4>Points Activity</h4>
                <table>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Activity</th>
                    <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>10/15/2024</td>
                    <td>Purchase</td>
                    <td>+30</td>
                    </tr>
                    <tr>
                    <td>10/15/2024</td>
                    <td>Purchase</td>
                    <td>+33</td>
                    </tr>
                </tbody>
                </table>
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

export default Point;
