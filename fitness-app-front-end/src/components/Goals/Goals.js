import React, { Fragment } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import classes from "./Goals.module.css";
import SleepGoal from "./GoalType/SleepGoal";
import StepsGoal from "./GoalType/StepsGoal";
import WaterGoal from "./GoalType/WaterGoal";

const Goals = () => {
    return(
        <Fragment>
            <Header />
            <NavBar />
            <div className={classes.fillheight}>
                <SleepGoal />
                <StepsGoal />
                <WaterGoal />
           </div>
        </Fragment>
    )
}

export default Goals;