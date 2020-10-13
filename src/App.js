import React from 'react';
import Loader from './pages/loader/Loader';
import NavSec from './pages/header/NavSec';
import Home from './pages/main/Home';
import About from './pages/aboutUs/About';
import Services from './pages/services/Services';
import Team from './pages/team/Team';
import Contact from './pages/contact/Contact';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div>
      <Loader />
      <NavSec />
      <Home />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;