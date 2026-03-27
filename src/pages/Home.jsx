import React from 'react';

import Hero from '../components/home/Hero'
import Collection from '../components/home/Collection'
import New from '../components/home/New'
import Best from '../components/home/Best'
import Recommand from '../components/home/Recommand'
import About from '../components/home/About'

import '../style/home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Collection />
            <New />
            <Best />
            <Recommand />
            <About />
        </div>
    );
};

export default Home;