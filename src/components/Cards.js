import React, { Component } from 'react';

import styles from "./Cards.module.css";
import Card from "./Card"

import pic1 from "../images/car1.png";
import pic2 from "../images/car5.png";
import pic3 from "../images/car6.png";
import pic4 from "../images/car7.png";

import {v4} from "uuid"; 

class Cards extends Component {

    constructor() {
        super();
        this.state = {
            carData: [
                { image: pic1 , name: "Benz", cost: "500 $" },
                { image: pic2 , name: "BMW", cost: "300 $" },
                { image: pic3 , name: "Toyota", cost: "600 $" },
                { image: pic4 , name: "Xhian", cost: "200 $" }
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.carData.map(car => <Card key={v4()} image={car.image} name={car.name}cost={car.cost} /> )}
            </div>
        );
    }
}

export default Cards;