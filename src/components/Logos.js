import React from 'react';

import styles from "./Logos.module.css";


const Logos = (props) => {    
    return (
        <div>
            <>
                <div className={styles.text}>
                    <p>Who supports us?</p>
                </div>
                <div className={styles.images}>
                    <img src={props.image[0]}/>
                    <img src={props.image[1]}/>
                    <img src={props.image[2]}/>
                </div>
            </>
        </div>
    );
};

export default Logos;