import "./style/Transaction.css"
import { Link } from "react-router-dom";

const Transaction = () => {
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

            <h1 className="isi">Transaction</h1>
            
            <main>
                <section className="transaction">
                    <h3>Order & Status</h3>
                    <div className="filter">
                        <p>Filter</p>
                            <button className="filter-icon">
                                <img src="/images/img/filter.png" alt="Filter Icon" />
                            </button>
                    </div>
                    <div className="order-status">
                        <div className="order-item">
                            <img src="/images/img/BLIK MEMBERSHIP.png" alt="BLINK MEMBERSHIP" />
                            <div className="order-details">
                                <h4>BLINK MEMBERSHIP [MEMBERSHIP CARD]</h4>
                                <p>Quantity: 1</p>
                                <p>Rp350.000</p>
                            </div>
                            <div className="status">Status: Packed</div>
                            <Link to="/DetailsItem"><button className="details-btn" >Details</button></Link>
                        </div>
                        <div className="order-item">
                            <img src="/images/img/lalisa_album.png" alt="LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]" />
                            <div className="order-details">
                                <h4>LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]</h4>
                                <p>Quantity: 1</p>
                                <p>Rp615.000</p>
                            </div>
                            <div className="status">Status: Shipping</div>
                            <Link to="/Tracking"><button className="details-btn" >Details</button></Link>
                        </div>
                        <div className="order-item">
                            <img src="/images/img/jisso_album.png" alt="JISOO FIRST SINGLE ALBUM [ME] KIT ALBUM" />
                            <div className="order-details">
                                <h4>JISOO FIRST SINGLE ALBUM [ME] KIT ALBUM</h4>
                                <p>Quantity: 1</p>
                                <p>Rp270.000</p>
                            </div>
                            <div className="status">Status: Cancelled</div>
                            <a href="Detail Items.html"><button className="details-btn" >Details</button></a>
                        </div>
                        <div className="order-item">
                            <img src="/images/img/bp_album.png" alt="BLACKPINK 2nd ALBUM [BORN PINK] DIGIPACK ver. SET" />
                            <div className="order-details">
                                <h4>BLACKPINK 2nd ALBUM [BORN PINK] DIGIPACK ver. SET</h4>
                                <p>Quantity: 1</p>
                                <p>Rp645.000</p>
                            </div>
                            <div className="status">Status: Complete</div>
                            <a href="Detail Items.html"><button className="details-btn" >Details</button></a>
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

export default Transaction;
