import React from 'react';
import Modal from '../../UI/Modal';
import { useState } from 'react';
import AuthContext from '../../../context/user-auth';
import { useContext } from 'react';

const TotalCaloriesGoal = (props) => {

    const [dailyCalorieGoal, setCalorieGoal] = useState('');

    const authCtx = useContext(AuthContext);

    const calorieGoalHandler = (event) => {
        setCalorieGoal(event.target.value);
    };

    const fetchCalorieGoalHandler = async (dailyCalorieGoal) => {
       try{
            const response = await fetch(
                "http://localhost:8080/api/caloriegoal/"+authCtx.UUID,
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        username: authCtx.UUID,
                        calorieGoal: dailyCalorieGoal
                    }),
                    headers: {
                     'Content-Type':'application/json'
                    },
                }
            );
            authCtx.updatedStateHandler(110);
            if(!response.ok){
                throw new Error('Request Failed');
            }

        }catch (err){
            
        }
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        setCalorieGoal(event.target.value);
        //props.calorieGoalHandler(dailyCalorieGoal);
        fetchCalorieGoalHandler(dailyCalorieGoal);
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