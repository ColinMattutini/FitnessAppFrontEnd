import React from "react";
import LoginButton from "../UI/LoginButton";
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
                <LoginButton value={'Delete'}/>
            </div>
            
        </li>
    )

};

export default FoodListing;