import React from 'react';

import styles from "./Navbar.module.css";
import logo from "../images/Profile.jpg";
 

const Navbar = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <li>Home Page</li>
                        <li>Products</li>
                        <li>About Us</li>
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