import React, { Component } from 'react';

import styles from "./Search.module.css";

class Search extends Component {
    
    constructor(){
        super(); 
        this.state = {
            search: "",
        }
    }

    changeHandler = (event) => {
        this.setState({
            search: event.target.value,
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <p>Search What you want</p>
                <div>
                    <input value={this.state.search} onChange={this.changeHandler} placeholder='Search...'/>
                    <br></br>
                    <br></br>
                    <span>{this.state.search}</span>
                </div>
            </div>
        );
    }
}

export default Search;