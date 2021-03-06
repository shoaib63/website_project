import React, { Component } from 'react';

import styles from "./Card.module.css";
import { Link } from "react-router-dom"; 

 
import down from '../images/down.svg';
import up from '../images/up.svg';


class Card extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }

    downHandler = () => {
        if (this.state.counter >= 1) {
            this.setState({
                counter: this.state.counter - 1,
            })
        }
    }

    upHandler = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        const { image, name, cost, id } = this.props;
        const { counter } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.PImage} src={image} />
                <h3><Link to={`/products/${id}`} >{name}</Link></h3>
                <p>{cost} {counter ? `* ${counter} = ${counter * cost.split(" ")[0]} $` : "" }</p>

                <div className={styles.counter}>
                    <img className={!this.state.counter ? styles.deactive : ""} onClick={this.downHandler} src={down} />
                    <span>{counter}</span>
                    <img onClick={this.upHandler} src={up} />
                </div>
            </div>
        );
    }
}

export default Card;