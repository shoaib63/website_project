import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from "./components/Cards";
import Search from './components/Search';
import Logos from './components/Logos';


import twitter from './images/twitter-logo.png'; 
import facebook from "./images/facebook-logo.png";
import telegram from "./images/telegram-logo.png";
import Footer from './components/Footer';

class App extends Component {
    render() {
        const images = [twitter, facebook, telegram];
        return (
            <div>
                <Navbar />
                <Banner />
                <Cards />
                <Search />
                <Logos image={images} />
                <Footer />
            </div>
        );
    }
}

export default App;