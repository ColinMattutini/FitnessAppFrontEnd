import Card from "../../UI/Card";
import React from "react";


const SleepGoal = (props) => {
    var sleepGoal = localStorage.getItem("SLEEPGOAL");
    // if(localStorage.getItem("SLEEPGOAL") === null){
    //     sleepGoal = props.sleepGoal;
    // }

    return(
        <Card onClick={props.showSleepModalHandler}>
            <h1>Sleep Goal:</h1>
            <h2>{sleepGoal} hours</h2>
        </Card>
    )

}

export default SleepGoal;