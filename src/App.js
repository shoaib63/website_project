import React, { Component } from 'react';
import Navbar from './components/Navbar';


import { Route, Routes, Navigate } from 'react-router-dom';


import Footer from './components/Footer';
import Landing from './components/Landing';
import Products from './components/Products'
import NotFound from './components/NotFound';
import AboutUs from './components/AboutUs';
import DetailsPage from './components/DetailsPage';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path='/products' element={<Products />} />
                    <Route path='/' element={<Landing />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/NotFound' element={<NotFound />} />
                    <Route path='/products/:id' element={<DetailsPage />} />
                    <Route path='*' element={<Navigate to="/NotFound" replace/> } />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App;


