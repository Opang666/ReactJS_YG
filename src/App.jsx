import { Routes, Route, } from 'react-router-dom';

import './style/AboutUs.css';
import './style/AboutusLogged.css';
import './style/Home.css';
import './style/Login.css';
import './style/Reset.css';
import './style/Regis.css';
import './style/ResetNext.css';
import './style/VerifikasiEmail.css';
import './style/HomeLogged.css';
import './style/PrivacyPolicy.css';
import './style/CookiesPolicy.css';
import './style/Payment.css';
import './style/Payment2.css';
import './style/Tracking.css';
import './style/Transaction.css';
import './style/Review.css';
import './style/DetailsItem.css';
import './style/Concert.css';
import './style/ArtistDetail.css';
import './style/DetailConcert.css';
import './style/ProductMiniAlbum.css';
import './style/ProductDetail.css'
import './style/NewsDetailLogged.css';
import './style/AccountSetting.css';
import './style/Point.css';
import './style/Checkout.css';
import './style/Community.css';
import './style/Contact.css';
import './style/Product.css';
import './style/Lightstick.css';
import './style/Merchandise.css';
import './style/Membership.css';

import AboutUs from './AboutUs';
import AboutusLogged from './AboutusLogged';
import Home from './Home';
import Login from './Login';
import Reset from './Reset';
import ResetNext from './ResetNext';
import Regis from './Regis';
import RegisNext from './RegisNext';
import VerifikasiEmail from './VerifikasiEmail';
import HomeLogged from './HomeLogged';
import PrivacyPolicy from './PrivacyPolicy';
import CookiesPolicy from './CookiesPolicy';
import Payment from './Payment';
import Payment2 from './Payment2';
import Tracking from './Tracking';
import Transaction from './Transaction';
import Review from './Review';
import DetailsItem from './DetailsItem';
import Concert from './Concert';
import ConcertLogged from './ConcertLogged';
import ArtistDetail from './ArtistDetail';
import ArtistDetailLogged from './ArtistDetailLogged';
import DetailConcert from './DetailConcert';
import DetailConcertLogged from './DetailConcertLogged';
import ProductMiniAlbum from './ProductMiniAlbum';
import ProductDetail from './ProductDetail';
import NewsDetailLogged from './NewsDetailLogged';
import AccountSetting from './AccountSetting';
import Point from './Point';
import Checkout from './Checkout';
import Community from './Community';
import Contact from './Contact';
import Product from './Product';
import Lightstick from './Lightstick';
import Merchandise from './Merchandise';
import Membership from './Membership';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={< Home />} />
        <Route path="/About-us" element={< AboutUs />} />
        <Route path="/AboutusLogged" element={< AboutusLogged />} />
        <Route path="/Login" element={< Login />} />
        <Route path="/Reset" element={< Reset />} />
        <Route path="/ResetNext" element={< ResetNext />} />
        <Route path="/Regis" element={< Regis />} />
        <Route path='/RegisNext' element={< RegisNext />} />
        <Route path='/VerifikasiEmail' element={< VerifikasiEmail />} />
        <Route path='/HomeLogged' element={< HomeLogged />} />
        <Route path='/PrivacyPolicy' element={< PrivacyPolicy />} />
        <Route path='/CookiesPolicy' element={< CookiesPolicy />} />
        <Route path='/Payment' element={< Payment />} />
        <Route path='/Payment2' element={< Payment2 />} />
        <Route path='/Tracking' element={< Tracking />} />
        <Route path='/Transaction' element={< Transaction />} />
        <Route path='/Review' element={< Review />} />
        <Route path='/DetailsItem' element={< DetailsItem />} />
        <Route path='/Concert' element={< Concert />} />
        <Route path='/ConcertLogged' element={< ConcertLogged />} />
        <Route path='/ArtistDetail' element={< ArtistDetail />} />
        <Route path='/ArtistDetailLogged' element={< ArtistDetailLogged />} />
        <Route path='/DetailConcert' element={< DetailConcert />} />
        <Route path='/DetailConcertLogged' element={< DetailConcertLogged />} />
        <Route path='/ProductMiniAlbum' element={< ProductMiniAlbum />} />
        <Route path='/ProductDetail' element={< ProductDetail />} />
        <Route path='/NewsDetailLogged' element={< NewsDetailLogged />} />
        <Route path='/AccountSetting' element={< AccountSetting />} />
        <Route path='/Point' element={< Point />} />
        <Route path='/Checkout' element={< Checkout />} />
        <Route path='/Community' element={< Community />} />
        <Route path='/Contact' element={< Contact />} />
        <Route path='/Product' element={< Product />} />
        <Route path='/Lightstick' element={< Lightstick />} />
        <Route path='/Merchandise' element={< Merchandise />} />
        <Route path='/Membership' element={< Membership />} />
      </Routes>
    </div>
  );
}

export default App;
