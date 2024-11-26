import { Link } from "react-router-dom";

const Community = () => {
    return (
        <>
             <header>
                <div className="navbar">
                    <img src="/public/images/img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />

                    <nav>
                        <Link to="/HomeLogged">Home</Link>
                        <Link to="/Product">Product</Link>
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
        </>
    );
};

export default Community;