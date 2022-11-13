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
                    onClick={showDeleteModalHandler}
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