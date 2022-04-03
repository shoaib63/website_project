import React from 'react';

import styles from "./Logos.module.css";



import twitter from '../images/twitter-logo.png'; 
import facebook from "../images/facebook-logo.png";
import telegram from "../images/telegram-logo.png";

const Logos = () => {    
    return (
        <div>
            <>
                <div className={styles.text}>
                    <p>Who supports us?</p>
                </div>
                <div className={styles.images}>
                    <img src={twitter}/>
                    <img src={facebook}/>
                    <img src={telegram}/>
                </div>
            </>
        </div>
    );
};

export default Logos;