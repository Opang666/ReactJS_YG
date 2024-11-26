import { Link } from "react-router-dom";

const ProductDetail = () => {
    const decreaseQuantity = () => {
        const quantityInput = document.getElementById("quantityInput");
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    };

    const increaseQuantity = () => {
        const quantityInput = document.getElementById("quantityInput");
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    };

    const addToCart = () => {
        alert("Item added to cart!");
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
            
            <div className="product-container">
                <div className="product-image">
                    <img src="/images/img/member_bp.png" alt="BLINK Membership Card" />
                </div>
                <main>
                <div className="product-details">
                    <h4>Blackpink</h4>
                    <h3>BLACKPINK GLOBAL OFFICIAL FANCLUB BLINK<br/>MEMBERSHIP</h3>
                    <main>
                    <p className="price">Rp350.000</p>
                    </main>
                    <main>
                    <p className="status">For Pre-Order</p>
                    <p className="shipping-date">Scheduled Shipping Start Date Nov 21 2024 - Nov 28 2024</p>
                    </main>
                    <main>
                    <div className="points">
                        <span>350 points</span>
                        <div className="quantity">
                            <button onClick={decreaseQuantity}>-</button>
                            <input type="text" id="quantityInput" value="1" readOnly />
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                    </div>
                    </main>
                    <main>
                    <p className="total" id="total">Total (1 Item) Rp350.000</p>
                    <div className="buttons">
                        <main>
                        <button className="add-to-cart" onClick={addToCart}>Add To Cart</button>
                        <button className="buy-now">Buy Now</button>
                        </main>
                    </div>
                    </main>
                </div>
                </main>
            </div>

            <section className="information">
                <h3>Information</h3>
                <table>
                    <tr><td>Product Name</td><td>BLINK MEMBERSHIP</td></tr>
                    <tr><td>Producer or supplier</td><td>YG ENTERTAINMENT Inc.</td></tr>
                    <tr><td>Terms and recommended usage period</td><td>You must use the identical account for YGConnect and YGConnect Shop to receive Membership benefits.</td></tr>
                    <tr><td>Product delivery method</td><td>Membership</td></tr>
                    <tr><td>Minimum system requirements or required software</td><td>Not Applicable</td></tr>
                    <tr><td>Effects of subscription withdrawal, or contract cancellation or termination</td><td>If you cancel/refund the payment for your Membership, you will no longer be able to take advantage of Membership benefits.</td></tr>
                    <tr><td>Telephone number for consumer consultation</td><td>Customer Center: (+62)21-3452-1312</td></tr>
                </table>
        </section>

        <footer>
                <div className="footer-links">
                    <a href="#">Terms of Use</a>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                    <Link to="/CookiesPolicy">Cookie Policy</Link>
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

export default ProductDetail;
