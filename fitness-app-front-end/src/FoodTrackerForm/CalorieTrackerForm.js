import classes from './CalorieTrackerForm.module.css';
import { useState } from 'react';

const CalorieTrackerForm = (props) => {

    const [foodInput, setFoodInput] = useState('');
    const [calorieInput, setCalorieInput] = useState('');

    const foodInputIsValid = foodInput !== '';
    const calorieInputIsValid = calorieInput !== '';

    let formIsValid = false;
    if(foodInputIsValid && calorieInputIsValid){
        formIsValid = true;
    };

    const foodInputHandler = (event) => {
        setFoodInput(event.target.value);
    };

    const calorieInputHandler = (event) => {
        setCalorieInput(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(foodInput, calorieInput);
        setFoodInput('');
        setCalorieInput('');
    };


    return(
        <form onSubmit={formSubmitHandler}>
            <div className={classes.trackerForm}>
            <label htmlFor='foodItem'>Enter Food Here</label>
            <input 
                type='text'
                value={foodInput}
                onChange={foodInputHandler}

            />
            <label htmlFor='calories'>Enter Calories Here</label>
            <input 
                type='text'
                value={calorieInput}
                onChange={calorieInputHandler}
            />
            <label htmlFor='date'>Enter Date</label>
            <input 
                type='date'


            />
            </div>
            <button className={classes.button}
            disabled={!formIsValid}
            >Submit</button>
        
        </form>

    );

};

export default CalorieTrackerForm;