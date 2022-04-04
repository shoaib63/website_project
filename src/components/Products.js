import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

import styles from "./Products.module.css";
import { v4 } from "uuid";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }


    componentDidMount() {
        axios.get("https://fakestoreapi.com/products/")
            .then(response => this.setState({
                products: response.data,
            }));
    }


    render() {
        const { products } = this.state;
        console.log(products);
        return (
            <div className={styles.container}>
                {
                    products.length ? this.state.products.map(product => <Card key={v4()} image={product.image} name={product.title} cost={`${product.price} $`} id={product.id} />) :
                    <h1>Loading...</h1>
                }
            </div>
        );
    }
}

export default Products;