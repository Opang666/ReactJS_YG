import { Link } from "react-router-dom";

const HomeLogged = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <img src="/public/images/img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />

                    <nav>
                        <Link to="/HomeLogged">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/community">Community</Link>
                        <Link to="/about_us_logged">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                </div>

                <button className="user-button">
                    <img src="/public/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
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
                    <img src="/public/images/img/Introduction.png" alt="Introduction" />
                    <div className="center">
                        <h1>What is YGentertainment.id?</h1>
                        <p>Official platform providing original YG Entertainment merchandise from Korea for fans in Indonesia. Find exclusive products and the latest concert schedules for YG artists here!</p>
                    </div>
                </section>

                <section className="upcoming-news">
                    <h2 style={{ paddingLeft: "2%" }}>Upcoming News</h2>
                    <Link to="#" className="more-link">More</Link>
                    <div className="news-grid">
                        <div className="news-item">
                            <img src="/public/images/img/bp.png" alt="Blackpink Comeback" />
                            <h3>Blackpink Comeback</h3>
                        </div>
                        <div className="news-item">
                            <img src="/public/images/img/Upcoming.Babymonster.png" alt="BabyMonster" />
                            <h3>Babymonster</h3>
                        </div>
                    </div>
                </section>

                <section className="upcoming-concerts">
                    <h2 style={{ paddingLeft: "2%" }}>Upcoming Concerts</h2>
                    <Link to="/more_concert_logged" className="more-link">More</Link>
                    <div className="concert-grid">
                        <div className="concert-item">
                            <img src="/public/images/img/Poster Konser Treasure.png" alt="TREASURE World Tour Poster" />
                            <h3>TREASURE World Tour</h3>
                        </div>
                        <div className="concert-item">
                            <img src="/public/images/img/Poster Konser BabyMonster.png" alt="SE U MARCH Poster" />
                            <h3>SE U MARCH</h3>
                        </div>
                    </div>
                </section>

                <section className="new-merch">
                    <h2 style={{ paddingLeft: "2%" }}>New Merch</h2>
                    <Link to="#" className="more-link">More</Link>
                    <div className="merch-grid">
                        <div className="merch-item">
                            <img src="/public/images/img/Love Pillow.png" alt="Love Pillow" />
                            <h3>Love Pillow</h3>
                        </div>
                        <div className="merch-item">
                            <img src="/public/images/img/My Type Mug.png" alt="My Type Mug" />
                            <h3>My Type Mug</h3>
                        </div>
                    </div>
                </section>

                <section className="artist-section">
                    <h2 style={{ paddingLeft: "2%" }}>Looking for artists?</h2>
                    <div className="artist-grid">
                        <div className="artist-card">
                            <img src="/public/images/img/blackpink.jpg" alt="BLACKPINK" />
                            <h3>BLACKPINK</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/public/images/img/treasuree.jpeg" alt="TREASURE" />
                            <h3>TREASURE</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/public/images/img/baby.png" alt="BABYMONSTER" />
                            <h3>BABYMONSTER</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/public/images/img/win.jpg" alt="WINNER" />
                            <h3>WINNER</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/public/images/img/akmu.jpeg" alt="AKMU" />
                            <h3>AKMU</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/public/images/img/EUN JIWON.png" alt="Eun Ji-won" />
                            <h3>Eun Ji-won</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/public/images/img/lisa.png" alt="Lalisa Manoban" />
                            <h3>Lalisa Manoban</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/public/images/img/jenni.png" alt="Jennie Kim" />
                            <h3>Jennie Kim</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/public/images/img/jisso.png" alt="Kim Ji-soo" />
                            <h3>Kim Ji-soo</h3>
                        </div>
                        <div className="artist-card">
                            <img src="/public/images/img/rose.png" alt="Roseanne Park" />
                            <h3>Roseanne Park</h3>
                        </div>
                    </div>

                    <div className="more-link">
                        <Link to="#">More</Link>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-links">
                    <Link to="#">Terms of Use</Link>
                    <Link to="#">Privacy Policy</Link>
                    <Link to="#">Cookie Policy</Link>
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
