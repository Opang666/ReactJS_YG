import { Link } from "react-router-dom";

const ProductMiniAlbum = () => {
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
        
            <main>
                    <div className="product-item">
                        <img src="/images/img/2022 Welcoming Collection.png" alt="2022 Welcoming Collection" />
                        <h3>2022 Welcoming <br/>Collection</h3>
                        <p>Rp615,000</p>
                    </div>

                <div>
                    <div className="product-item">
                        <img src="/images/img/TREASURE TUMBLER.png" alt="TREASURE TUMBLER" />
                        <h3>TREASURE <br/>TUMBLER</h3>
                        <p>Rp465,000</p>
                    </div>
                </div>

                <div className="product-item">
                    <img src="/images/img/WINNER 10th ANNIVERSARRY MUG.png" alt="WINNER 10TH ANNIVERSARY MUG" />
                    <h3>WINNER 10TH <br/>ANNIVERSARY MUG</h3>
                    <p>Rp345,000</p>
                </div>

                <div className="product-item">
                    <img src="/images/img/BABYMONSTER ROOM SLIPPER.png" alt="BABYMONSTER ROOM SLIPPER" />
                    <h3>BABYMONSTER <br/>ROOM SLIPPER</h3>
                    <p>Rp525,000</p>
                </div>
            </main>

            <main>
                <div className="product-item">
                    <img src="/images/img/WINNER TEAM VARSITY JACKET.png" alt="WINNER TEAM VARSITY JACKET" />
                    <h3>WINNER TEAM <br/>VARSITY JACKET</h3>
                    <p>Rp1,575,000</p>
                </div>
                <div className="product-item">
                    <img src="/images/img/BABYMONSTER PHOTOCARD PACKAGE.png" alt="BABYMONSTER PHOTOCARD PACKAGE" />
                    <h3>BABYMONSTER <br/>PHOTOCARD PACKAGE</h3>
                    <p>Rp195,000</p>
                </div>
                <div className="product-item">
                    <img src="/images/img/JISOO BRACELET.png" alt="DISCO BRACELET" />
                    <h3>DISCO <br/>BRACELET</h3>
                    <p>Rp430,000</p>
                </div>
                <div className="product-item">
                    <img src="/images/img/TREASURE HOODIE.png" alt="TREASURE HOODIE" />
                    <h3>TREASURE <br/>HOODIE</h3>
                    <p>Rp1,125,000</p>
                </div>
            </main>

            <main>
                <div className="product-item">
                    <img src="/images/img/TREASURE SCRUNCHIE SET.png" alt="TREASURE SCRUNCHIE SET" />
                    <h3>TREASURE <br/>SCRUNCHIE SET</h3>
                    <p>Rp375,000</p>
                </div>
                <div className="product-item">
                    <img src="/images/img/mug.png" alt="BACKPACK RE-CYCLE TOTE BAG" />
                    <h3>BABYMONSTER MUG <br/>+ COASTER SET</h3>
                    <p>Rp250,000</p>
                </div>
                <div className="product-item">
                    <img src="/images/img/WINNER TRAVEL BAG.png" alt="WINNER TEAM BAG" />
                    <h3>WINNER <br/>TEAM BAG</h3>
                    <p>Rp555,000</p>
                </div>
                <div className="product-item">
                    <img src="/images/img/BABYMONSTER HOODIE.png" alt="BABYMONSTER HOODIE" />
                    <h3>BABYMONSTER <br/>HOODIE</h3>
                    <p>Rp1,020,000</p>
                </div>
            </main>
            
            <main>
                <div className="more-link">
                    <a href="#">More</a>
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

export default ProductMiniAlbum;