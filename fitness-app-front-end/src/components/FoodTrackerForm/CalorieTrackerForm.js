import classes from './CalorieTrackerForm.module.css';
import { useContext, useState } from 'react';
import AuthContext from '../../context/user-auth.js';

const CalorieTrackerForm = () => {

    const authCtx = useContext(AuthContext);
    const [foodInput, setFoodInput] = useState('');
    const [calorieInput, setCalorieInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [error, setError] = useState(null);

    const foodInputIsValid = foodInput !== '';
    const calorieInputIsValid = calorieInput !== '';
    const dateInputIsValid = dateInput !== '';

    let formIsValid = false;
    if(foodInputIsValid && calorieInputIsValid && dateInputIsValid){
        formIsValid = true;
    };

    const foodInputHandler = (event) => {
        setFoodInput(event.target.value);
    };

    const calorieInputHandler = (event) => {
        setCalorieInput(event.target.value);
    };

    const dateInputHandler = (event) => {
        setDateInput(event.target.value);
    }
    

    const formSubmitHandler = (event) => {
        event.preventDefault();
        
        enterFoodHandler(foodInput, calorieInput, dateInput);
        console.log(foodInput, calorieInput, dateInput);
        setFoodInput('');
        setCalorieInput('');
        setDateInput('');
    };


    const enterFoodHandler = 
        async (foodInput, calorieInput, dateInput) => {
            try{
                const response = await fetch(
                    'https://calorie-fitness-tracker-default-rtdb.firebaseio.com/foodItem.json',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            userId: authCtx.UUID,
                            foodItem: foodInput,
                            calories: calorieInput,
                            date: dateInput
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                if(!response.ok){
                    throw new Error('Request Failed');
                }
                const data = await response.json();
                // const generatedId = data.name;
            } catch (err) {
                setError(err.message || 'Something went wrong');
            };
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
                value={dateInput}
                onChange={dateInputHandler}
            />
            </div>
            <button className={classes.button}
            disabled={!formIsValid}
            >Submit</button>
        
        </form>

    );

};

export default CalorieTrackerForm;