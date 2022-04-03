import React, { Component } from 'react';
import Navbar from './components/Navbar';


import { Route , Switch ,Redirect } from 'react-router-dom';


import Footer from './components/Footer';
import Landing from './components/Landing';
import Products from './components/Products'
import NotFound from './components/NotFound';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path='/products' component={Products} />
                    <Route exact path='/' component={Landing} />
                    <Route path='/NotFound' component={NotFound} />
                    <Redirect to="/NotFound"/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;


