import React, { Fragment } from "react";
import LoginButton from "../UI/LoginButton";
import classes from './FoodListing.module.css';
import { useState } from "react";
import MoreInfoModal from "./IndividualItem/MoreInfoModal";

const FoodListing = (props) => {

    const [showModal, setShowModal] = useState(false);

    //Needs thorough testing
    const fetchDeleteFood = async (foodItem) => {
        try{
            const response = await fetch(
                'https://calorie-fitness-tracker-default-rtdb.firebaseio.com/foodItem/'+props.id+'.json',
                {
                    method: 'DELETE',
                    body: JSON.stringify({
                        id: props.id
                    }),
                    headers: {'Content-Type': 'application/json'}
                }
            );
        } catch(error){
            //Add error catch here
        }
    }; 

    const deleteHandler = (event) => {
        fetchDeleteFood(props.id);
        console.log('Delete Button Clicked');
    };

    const showModalHandler = () => {
        setShowModal(true);
    }

    return(
        <Fragment>
        {showModal && <MoreInfoModal />}
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
                <LoginButton 
                    value={'More Info'}
                    onClick={showModalHandler}
                />
            </div>
            
        </li>
        </Fragment>
    )

};

export default FoodListing;