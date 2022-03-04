import React, { Component } from 'react';

import styles from "./Cards.module.css"; 
import Card from "./Card"

import pic1 from "../images/car1.png"
import pic2 from "../images/car5.png"
import pic3 from "../images/car6.png"
import pic4 from "../images/car7.png"


class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={pic1}  name="Benz" cost="500 $"  />
                <Card image={pic2}  name="BMW" cost="300 $" />
                <Card image={pic3}  name="Toyota" cost="600 $" />
                <Card image={pic4}  name="Xhian" cost="200 $" />
            </div>
        );
    }
}

export default Cards;