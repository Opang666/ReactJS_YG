import { Routes, Route, } from 'react-router-dom';

import './style/AboutUs.css';
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

import AboutUs from './AboutUs';
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={< Home />} />
        <Route path="/about-us" element={< AboutUs />} />
        <Route path="/login" element={< Login />} />
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
      </Routes>
    </div>
  );
}

export default App;
