import { Link } from "react-router-dom";
import './style/ArtistDetail.css';

const ArtistDetailLogged = () => {
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
                        <Link to="/AboutUsLogged">About Us</Link>
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

            <h1 className="isi">BABYMONSTER</h1>
            <main>
                <section className="banner">
                    <img src="/images/img/detail_BM.png" alt="BABYMONSTER" />
                    <button>Artist Info</button>
                </section>
            </main>

            <main>
                <section className="members">
                    <h2>Members</h2>
                    <div className="member-list">
                        <div className="member-item">
                            <img src="/images/img/asa.jpg" alt="Asa" />
                            <p className="member-name">Asa</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/pharita_bm.jpg" alt="Pharita" />
                            <p className="member-name">Pharita</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/ruka_bm.jpg" alt="Yuka" />
                            <p className="member-name">Ruka</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/rami_bm.jpg" alt="Rami" />
                            <p className="member-name">Rami</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/rora_bm.jpg" alt="Rora" />
                            <p className="member-name">Rora</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/ahyeon_bm.jpg" alt="Ahyeon" />
                            <p className="member-name">Ahyeon</p>
                        </div>
                        <div className="member-item">
                            <img src="/images/img/chita_bm.jpg" alt="Chiquita" />
                            <p className="member-name">Chiquita</p>
                        </div>
                    </div>
                </section>
            </main>

            <main>
                <section className="merch">
                    <h2>Merch</h2>
                    <div className="merch-list">
                        <div className="item">
                            <img src="/images/img/keyring.png" alt="Keyring" />
                            <p>Keyring<br/><span>100 Points</span></p>
                        </div>
                        <div className="item">
                            <img src="/images/img/Signature Ring.png" alt="Signature Ring" />
                            <p>Signature Ring<br/><span>200 Points</span></p>
                        </div>
                        <div className="item">
                            <img src="/images/img/Brooch.png" alt="Brooch" />
                            <p>Brooch<br/><span>150 Points</span></p>
                        </div>
                        <div className="item">
                            <img src="/images/img/necklace.png" alt="Room Slipper" />
                            <p>Necklace<br/><span>250 Points</span></p>
                        </div>
                        <div className="item">
                            <img src="/images/img/Ballcap.png" alt="Ballcap" />
                            <p>Ballcap<br/><span>250 Points</span></p>
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

export default ArtistDetailLogged;