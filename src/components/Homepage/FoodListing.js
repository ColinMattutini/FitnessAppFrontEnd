import React, { Fragment } from "react";
import LoginButton from "../UI/LoginButton";
import classes from './FoodListing.module.css';
import { useState } from "react";
import MoreInfoModal from "./IndividualItem/MoreInfoModal";
import DeleteConfirmationModal from "./DeleteConfirmation/DeleteConfirmationModal";

const FoodListing = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    }

    const hideModalHandler = () => {
        setShowModal(false);
    };

    const showDeleteModalHandler = () => {
        setShowDeleteModal(true);
    };  

    const hideDeleteModalHandler = () => {
        setShowDeleteModal(false);
    };

    return(
        <Fragment>
        {showModal && 
        <MoreInfoModal 
            id={props.id}
            food={props.food}
            calories={props.calories}
            date={props.date}
            hideModalHandler={hideModalHandler}
        />}
        {showDeleteModal && <DeleteConfirmationModal
            id={props.id}
            hideDeleteModalHandler={hideDeleteModalHandler}
            
        />}
        <li className={classes.food}>
            <div className={classes.textdiv}>
                <div className={classes.foodname}>
                <h3>
                    {props.food}
                </h3>
                </div>
                
                <div className={classes.date}>
                    {props.date}
                </div>
                
                <div className={classes.calories}>
                    Calories: {props.calories}
                </div> 
                
            </div>
            <div className={classes.buttonplacement}>
                <div className={classes.updatebutton}>
                    <button 
                        value={'More Info'}
                        onClick={showModalHandler}      
                    >Update Info</button>
                </div>
                <div className={classes.deletebutton}>
                    <button 
                        value={'Delete'}
                        onClick={showDeleteModalHandler}
                >Delete</button>
                </div>
                
                </div>
            
        </li>
        </Fragment>
    )

};

export default FoodListing;