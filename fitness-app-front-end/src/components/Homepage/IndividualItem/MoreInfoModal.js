import React, { useContext } from "react";
import LoginButton from "../../UI/LoginButton";
import Modal from "../../UI/Modal";
import { useState } from "react";
import AuthContext from "../../../context/user-auth";

const MoreInfoModal = (props) => {

    const authCtx = useContext(AuthContext);

    const [calories, setCalories] = useState('');
    const [food, setFood] = useState('');
    const [date, setDate] = useState('');

    const caloriesHandler = (event) => {
        setCalories(event.target.value);
    };


    const updateItemFetch = async (calories) => {
        try{
        await fetch(
            //'https://calorie-fitness-tracker-default-rtdb.firebaseio.com/foodItem/'+props.id+'.json',
            'http://localhost:8080/api/user/'+authCtx.UUID+'/foodEntry/'+props.id,
            {
                method: "PUT",
                body: JSON.stringify({

                    id: props.id,
                    foodName: props.food,
                    calories: calories,
                    date: props.date

                }
                
                ),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
                
            }
        
            )
            authCtx.updatedStateHandler(10);
        }catch(error){
            console.log("something went wrong");
        }
            
    }

    const onSubmitUpdateHandler = (event) => {
        event.preventDefault();
        updateItemFetch(calories);
        props.hideModalHandler();
    }


    return(
        <Modal>
        <form onSubmit={onSubmitUpdateHandler}>
            <h1>{props.food}</h1>
            <label>{props.calories}</label>
            <input 
                // defaultValue={props.calories} 
                value={calories} 
                onChange={caloriesHandler}   
            />
            <label>{props.date}</label>
            <input 
                type='date'
                defaultValue={props.date}
            />
            <LoginButton 
                value='Close' 
                onClick={props.hideModalHandler}    
            />
            <LoginButton value={"Submit"}/>
        </form>
        </Modal>

    );
};

export default MoreInfoModal;