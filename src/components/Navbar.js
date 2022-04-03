import React from 'react';

import { Link , Redirect } from "react-router-dom"

import styles from "./Navbar.module.css";
import logo from "../images/Profile.jpg";
 

const Navbar = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                    </ul>
                </div>
                <div >
                    <img className={styles.logo} src={logo} alt ="Logo Image" />
                </div>
            </header>
        </div>
    );
};

export default Navbar;