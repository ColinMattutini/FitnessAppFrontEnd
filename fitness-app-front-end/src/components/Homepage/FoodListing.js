import React from "react";
import classes from './FoodListing.module.css';

const FoodListing = (props) => {
    return(
        <li className={classes.food}>
            <div>
                <h3>
                    {props.food}
                </h3>
                <div className={classes.description}>
                    {props.date}
                </div>
                <div className={classes.calories}>
                    {props.calories}
                </div> 
                <button>Test</button>
            </div>
            
        </li>
    )

};

export default FoodListing;