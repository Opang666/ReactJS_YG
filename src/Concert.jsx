import { Link } from "react-router-dom";

const Concert = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <img src="/images/img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />
                    <nav className="nav-links">
                        <Link to="/Home">Home</Link>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/login" className="login-button">Log In</Link>
                    </nav>
                </div>
            </header>

            <h2 className="isi">Concerts & Events</h2>
            <main>
                    <main className="content">
                        <div
                            className="event-grid"
                            onClick={() => (window.location.href = 'DetailConcert')}
                        >
                            <div className="event">
                                <img src="/images/img/konser_seventeen.png" alt="Konser Seventeen" />
                                <div className="date">
                                    <p id="date">Feb 8</p>
                                    <p>SEVENTEEN - &quot;RIGHT HERE&quot; Tour</p>
                                </div>
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </main>

                    <main className="content">
                        <div
                            className="event-grid"
                            onClick={() => (window.location.href = 'detail_concert_bp.html')}
                        >
                            <div className="event">
                                <img src="/images/img/nct.png" alt="Konser Seventeen" />
                                <div className="date">
                                    <p id="date">May 18</p>
                                    <p>NCT DREAM - &quot;THE DREAM SHOW 3:&quot;DREAM()SCAPE</p>
                                </div>
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </main>

                    <main className="content">
                        <div
                            className="event-grid"
                            onClick={() => (window.location.href = 'detail_concert_bp.html')}
                        >
                            <div className="event">
                                <img src="/images/img/ive.png" alt="Konser Seventeen" />
                                <div className="date">
                                    <p id="date">Jan 13</p>
                                    <p>IVE -The 1st World Tour &quot;Show What I Have&quot;</p>
                                </div>
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </main>
            </main>
            <main>
                    <main className="content">
                        <div
                            className="event-grid"
                            onClick={() => (window.location.href = 'detail_concert_bp.html')}
                        >
                            <div className="event">
                                <img src="/images/img/synk.jpg" alt="Konser Seventeen" />
                                <div className="date">
                                    <p id="date">Aug 24</p>
                                    <p>aespa - &quot;SYNK: Parallel Link&quot;World Tour</p>
                                </div>
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </main>

                    <main className="content">
                        <div
                            className="event-grid"
                            onClick={() => (window.location.href = 'detail_concert_bp.html')}
                        >
                            <div className="event">
                                <img src="/images/img/btob.png" alt="Konser Seventeen" />
                                <div className="date">
                                    <p id="date">Jul 13</p>
                                    <p>BtoB - &quot;Out Dream &quot; - Fan-Con</p>
                                </div>
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </main>

                    <main className="content">
                        <div
                            className="event-grid"
                            onClick={() => (window.location.href = 'detail_concert_bp.html')}
                        >
                            <div className="event">
                                <img src="/images/img/zerosabone.png" alt="Konser Seventeen" />
                                <div className="date">
                                    <p id="date">Oct 26</p>
                                    <p>ZEROSABONE - The First Tour</p>
                                </div>
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </main>
            </main>

            <div className="more-link">
                <a href="#">More</a>
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
        </>
    );
};

export default Concert;
