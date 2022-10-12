import React from 'react';
import Modal from '../UI/Modal';
import { useState } from 'react';

const TotalCaloriesGoal = (props) => {

    const [dailyCalorieGoal, setCalorieGoal] = useState('');

    const calorieGoalHandler = (event) => {
        setCalorieGoal(event.target.value);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        setCalorieGoal(event.target.value);
        props.calorieGoalHandler(dailyCalorieGoal);
        props.hideCalorieGoalModalHandler();
    }



    return (
    <Modal>
        <form onSubmit={submitFormHandler}>
        <div>
            <label>Calories Daily Goal</label>
            <input type = "text" onChange={calorieGoalHandler} value={dailyCalorieGoal}/>
            
            <button onClick={submitFormHandler}>Submit</button>
            <button onClick={props.hideCalorieGoalModalHandler}>Close</button>
        </div>
        </form>
    </Modal>
    );
};

export default TotalCaloriesGoal;