import React, { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/user-auth";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SleepGoalModal from "./GoalModals/SleepGoalModal";
import StepsGoalModal from "./GoalModals/StepsGoalModal";
import WaterGoalModal from "./GoalModals/WaterGoalModal";
import classes from "./Goals.module.css";
import SleepGoal from "./GoalType/SleepGoal";
import StepsGoal from "./GoalType/StepsGoal";
import WaterGoal from "./GoalType/WaterGoal";

const Goals = () => {

    const authCtx = useContext(AuthContext);
    const [sleepGoal, setSleepGoal] = useState(0);
    const [showSleepModal, setShowSleepModal] = useState(false);
    const [showWaterModal, setShowWaterModal] = useState(false);
    const [showStepsModal, setShowStepsModal] = useState(false);

    const showSleepModalHandler = () => {
        setShowSleepModal(true);
    }

    const hideSleepModalHandler = () => {
        setShowSleepModal(false);
    }

    const showWaterModalHandler = () => {
        setShowWaterModal(true);
    }

    const hideWaterModalHandler = () => {
        setShowWaterModal(false);
    }

    const showStepsModalHandler = () => {
        setShowStepsModal(true);
    }

    const hideStepsModalHandler = () => {
        setShowStepsModal(false);
    }

    const fetchGoals =  async () => {
        const response = await fetch(
            "https://fitness-go.herokuapp.com/api/goal/"+authCtx.UUID,
            {
                headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
            }

        )
            const data = await response.json();
            console.log(data);
            var sleepGoal = data.filter(e => e.goalType === 'SLEEP');
            var waterGoal = data.filter(e => e.goalType === 'WATER');
            var stepsGoal = data.filter(e => e.goalType === 'STEPS');

            var sleepNum = sleepGoal[0].goalNumber;
            var waterNum = waterGoal[0].goalNumber;
            var stepsNum = stepsGoal[0].goalNumber;
            
            localStorage.setItem("SLEEPGOAL", sleepNum);
            setSleepGoal(sleepNum);
            localStorage.setItem("WATERGOAL", waterNum);
            localStorage.setItem("STEPSGOAL", stepsNum);
            console.log("Goal fetch ran!");
    }

    useEffect(() => {
        if(localStorage.getItem("SLEEPGOAL") === null){
            fetchGoals();
            
        }
    })

    return(
        <Fragment>
            <Header />
            <NavBar />
            {showSleepModal && <SleepGoalModal fetchGoals={fetchGoals}hideSleepModalHandler={hideSleepModalHandler}/>}
            {showStepsModal && <StepsGoalModal hideStepsModalHandler={hideStepsModalHandler}/>}
            {showWaterModal && <WaterGoalModal hideWaterModalHandler={hideWaterModalHandler}/>}
            <div className={classes.fillheight}>
                <SleepGoal 
                    showSleepModalHandler={showSleepModalHandler} 
                    sleepGoal = {sleepGoal} />
                <StepsGoal 
                    showStepsModalHandler={showStepsModalHandler}
                />
                <WaterGoal 
                    showWaterModalHandler={showWaterModalHandler}
                />
               
           </div>
        </Fragment>
    )
}

export default Goals;