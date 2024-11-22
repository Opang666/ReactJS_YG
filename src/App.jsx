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
      </Routes>
    </div>
  );
}

export default App;
