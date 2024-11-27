import { Link } from "react-router-dom";
import "./style/HomeLogged.css"

const HomeLogged = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <img src="/images/img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />

                    <nav>
                        <Link to="/HomeLogged">Home</Link>
                        <Link to="/Product">Product</Link>
                        <Link to="/Community">Community</Link>
                        <Link to="/AboutUsLogged">About Us</Link>
                        <Link to="/Contact">Contact Us</Link>
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
                <section className="hero">
                    <img src="/images/img/Introduction.png" alt="Introduction" />
                    <div className="center">
                        <main>
                            <h1>What is YGentertainment.id?</h1>
                        </main>
                        <p>Official platform providing original YG Entertainment merchandise from Korea for fans in Indonesia. Find exclusive products and the latest concert schedules for YG artists here!</p>
                    </div>
                </section>
            </main>

            <main>
                <section className="upcoming-news">
                    <h2 style={{ paddingLeft: "2%" }}>Upcoming News</h2>
                    <Link to="#" className="more-link">More</Link>
                    <div className="news-grid">
                        <div className="news-item">
                            <img src="/images/img/bp.png" alt="Blackpink Comeback" />
                        </div>
                        <div className="news-item">
                            <img src="/images/img/Upcoming.Babymonster.png" alt="BabyMonster" />
                        </div>
                    </div>
                </section>
            </main>

            <main>
                <section className="upcoming-concerts">
                    <h2 style={{ paddingLeft: "2%" }}>Upcoming Concerts</h2>
                    <Link to="/ConcertLogged" className="more-link">More</Link>
                    <div className="concert-grid">
                        <div className="concert-item">
                            <img src="/images/img/Poster Konser Treasure.png" alt="TREASURE World Tour Poster" />
                        </div>
                        <div className="concert-item">
                            <img src="/images/img/Poster Konser BabyMonster.png" alt="SE U MARCH Poster" />
                        </div>
                    </div>
                </section>
            </main>

            <main>
                <section className="new-merch">
                    <h2 style={{ paddingLeft: "2%" }}>New Merch</h2>
                    <Link to="#" className="more-link">More</Link>
                    <div className="merch-grid">
                        <div className="merch-item">
                            <img src="/images/img/Love Pillow.png" alt="Love Pillow" />
                        </div>
                        <div className="merch-item">
                            <img src="/images/img/My Type Mug.png" alt="My Type Mug" />
                        </div>
                    </div>
                </section>
            </main>
            
            <main>
                <section className="artist-section">
                    <h2 style={{ paddingLeft: "2%" }}>Looking for artists?</h2>
                    <div className="artist-grid">
                        <div className="artist-card">
                            <img src="/images/img/blackpink.jpg" alt="BLACKPINK" />
                            <h3>BLACKPINK</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/images/img/treasuree.jpeg" alt="TREASURE" />
                            <h3>TREASURE</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/images/img/baby.png" alt="BABYMONSTER" />
                            <h3>BABYMONSTER</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/images/img/win.jpg" alt="WINNER" />
                            <h3>WINNER</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/images/img/akmu.jpeg" alt="AKMU" />
                            <h3>AKMU</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/images/img/EUN JIWON.png" alt="Eun Ji-won" />
                            <h3>Eun Ji-won</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/images/img/lisa.png" alt="Lalisa Manoban" />
                            <h3>Lalisa Manoban</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/images/img/jenni.png" alt="Jennie Kim" />
                            <h3>Jennie Kim</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/images/img/jisso.png" alt="Kim Ji-soo" />
                            <h3>Kim Ji-soo</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/images/img/rose.png" alt="Roseanne Park" />
                            <h3>Roseanne Park</h3>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-links">
                    <Link to="#">Terms of Use</Link>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                    <Link to="/CookiesPolicy">Cookie Policy</Link>
                    <Link to="#">Announcements</Link>
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

export default HomeLogged;
