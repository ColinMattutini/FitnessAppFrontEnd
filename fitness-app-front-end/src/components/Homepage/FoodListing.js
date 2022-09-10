import React from "react";
import LoginButton from "../UI/LoginButton";
import classes from './FoodListing.module.css';

const FoodListing = (props) => {

    //Add method req for DELETE to function
    const fetchDeleteFood = async (foodItem) => {
        try{
            const response = await fetch(
                'https://calorie-fitness-tracker-default-rtdb.firebaseio.com/foodItem.json'
            );
        } catch(error){
            //Add error catch here
        }
    }; 

    const deleteHandler = (event) => {
        console.log('Delete Button Clicked');
    };


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
                <LoginButton 
                    value={'Delete'}
                    onClick={deleteHandler}
                />
            </div>
            
        </li>
    )

};

export default FoodListing;