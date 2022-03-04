import React from 'react';

import styles from "./Banner.module.css";
import banner from "../images/Header.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="Banner" />
            <div className={styles.textContainer}>
                <h1>Shoaib Miraki</h1>
                <p>
                    I am the best <span>React</span> Programmer
                </p>
            </div>
        </div>
    );
};

export default Banner;