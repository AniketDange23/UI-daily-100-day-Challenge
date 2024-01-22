import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Consultation from './components/Consultation';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';



import Home from './components/Home';
import OurServices from './components/OurServices';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUS" element={<ContactUs />} />
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>


        </Routes>
        {/* <Footer /> */}
      </div>

    </BrowserRouter >


  );
}

export default App;
