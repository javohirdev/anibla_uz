import React from 'react';
// import Loader from '../pages/loader/Loader';
import NavSec from '../pages/header/NavSec';
import FilmInfo from './FilmInfo';
import News from './News';
import Films from './Films';
import Footer from '../pages/footer/Footer';

function Home(){
    return(
        <div>
            {/* <Loader /> */}
            <NavSec />
            <FilmInfo />
            <News />
            <Films />
            <Footer />
        </div>
    )
}

export default Home;