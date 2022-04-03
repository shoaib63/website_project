import React, { Component } from 'react';
import Navbar from './components/Navbar';

import { Route, Routes } from "react-router-dom"


import Footer from './components/Footer';
import Landing from './components/Landing';
import Products from "./components/Products"
 
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path='/products' component={Products} />
                    <Route path='/' component={Landing} />
                </Routes>
                
                <Footer />
            </div>
        );
    }
}

export default App;

