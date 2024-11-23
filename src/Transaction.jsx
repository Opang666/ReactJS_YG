import "./style/Transaction.css"

const Transaction = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <img
                        src="/public/images/img/logo_YG.png"
                        alt="YG Entertainment Logo"
                        className="logo"
                    />
                    <nav>
                        <a href="home_logged.html">Home</a>
                        <a href="product.html">Product</a>
                        <a href="community.html">Community</a>
                        <a href="about_us_logged.html">About Us</a>
                        <a href="contact.html">Contact Us</a>
                    </nav>
                    <button className="user-button">
                        <img
                            src="/public/images/img/profile.png"
                            alt="User Icon"
                            className="icon-img"
                        />{" "}
                        Nurzaba
                    </button>
                    <div className="dropdown">
                        <ul>
                            <li><a href="Cart.html">Cart</a></li>
                            <li><a href="poin.html">Poin</a></li>
                            <li><a href="transaction.html">Transaction</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Log Out</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <main className="container">
                <h1>Transaction</h1>
                <div className="filter">
                    <p>Filter</p>
                    <button className="filter-icon">
                        <img
                            src="/public/images/img/filter.png"
                            alt="Filter Icon"
                        />
                    </button>
                </div>

                <section className="transaction">
                    <h3>Order & Status</h3>
                    <div className="order-status">
                        <div className="order-item">
                            <img
                                src="/public/images/img/BLIK MEMBERSHIP.png"
                                alt="BLINK MEMBERSHIP"
                            />
                            <div className="order-details">
                                <h4>BLINK MEMBERSHIP [MEMBERSHIP CARD]</h4>
                                <p>Quantity: 1</p>
                                <p>Rp350.000</p>
                            </div>
                            <div className="status">Status: Packed</div>
                            <a href="Detail Items.html">
                                <button className="details-btn">Details</button>
                            </a>
                        </div>

                        <div className="order-item">
                            <img
                                src="/public/images/img/lalisa_album.png"
                                alt="LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]"
                            />
                            <div className="order-details">
                                <h4>LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]</h4>
                                <p>Quantity: 1</p>
                                <p>Rp615.000</p>
                            </div>
                            <div className="status">Status: Shipping</div>
                            <a href="detail_item.html">
                                <button className="details-btn">Details</button>
                            </a>
                        </div>

                        <div className="order-item">
                            <img
                                src="/public/images/img/jisso_album.png"
                                alt="JISOO FIRST SINGLE ALBUM [ME] KIT ALBUM"
                            />
                            <div className="order-details">
                                <h4>JISOO FIRST SINGLE ALBUM [ME] KIT ALBUM</h4>
                                <p>Quantity: 1</p>
                                <p>Rp270.000</p>
                            </div>
                            <div className="status">Status: Cancelled</div>
                            <a href="Detail Items.html">
                                <button className="details-btn">Details</button>
                            </a>
                        </div>

                        <div className="order-item">
                            <img
                                src="/public/images/img/bp_album.png"
                                alt="BLACKPINK 2nd ALBUM [BORN PINK] DIGIPACK ver. SET"
                            />
                            <div className="order-details">
                                <h4>
                                    BLACKPINK 2nd ALBUM [BORN PINK] DIGIPACK
                                    ver. SET
                                </h4>
                                <p>Quantity: 1</p>
                                <p>Rp645.000</p>
                            </div>
                            <div className="status">Status: Complete</div>
                            <a href="Detail Items.html">
                                <button className="details-btn">Details</button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-links">
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                    <a href="#">Announcements</a>
                </div>
                <div className="footer-info">
                    <p>
                        Brand Inc. | CEO: SHABRINA ZAHRA AULIA CALL CENTER
                        (+62)21-3452-1312 FAX (+62)21-4242-6565
                    </p>
                    <p>
                        ADDRESS Jl. KH. Ahmad Dahlan Kby. No.14A, RT.2/RW.1,
                        Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan,
                        Daerah Khusus Ibukota Jakarta 12130
                    </p>
                    <p>© BRAND COMPANY Inc.</p>
                </div>
            </footer>
        </>
    );
};

export default Transaction;
