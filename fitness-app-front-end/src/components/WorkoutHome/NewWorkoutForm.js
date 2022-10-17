import React, { useContext, useState } from "react";
import AuthContext from "../../context/user-auth";
import Modal from "../UI/Modal";

const NewWorkoutCard = (props) => {

    const authCtx = useContext(AuthContext);
    
    const [workoutName, setWorkoutName] = useState('');

    const fetchNewWorkout = async (workoutName) => {
        try{
            const response = await fetch(
                "http://localhost:8080/api/user/"+authCtx.UUID+"/workout",
                {
                    method: "POST",
                    body: JSON.stringify({
                        workoutName: workoutName,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        //'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                }

            )
            if(!response.ok){
                throw new Error('Request Failed');
            }
            
        // authCtx.updatedStateHandler(40);
        // const generatedId = data.name;
            } 
        catch (err) {
            
        };
    }

    const workoutNameHandler = (event) => {
        setWorkoutName(event.target.value);
    };

    const workoutFormSubmit = (event) => {
        event.preventDefault();
        fetchNewWorkout(workoutName);
        props.hideNewWorkoutCardHandler();
    }

    return(
        <Modal>
        <form onSubmit={workoutFormSubmit}>
        
            <input 
                placeholder="Workout Name"
                onChange={workoutNameHandler}
            />
            <button>Add Workout</button>
            <button onClick={props.hideNewWorkoutCardHandler}>Close</button>
        </form>
        
        </Modal>
    )
}

export default NewWorkoutCard;