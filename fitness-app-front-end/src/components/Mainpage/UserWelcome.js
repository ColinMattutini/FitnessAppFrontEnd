import React, { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/user-auth";
import SleepGoal from "../Goals/GoalType/SleepGoal";
import StepsGoal from "../Goals/GoalType/StepsGoal";
import WaterGoal from "../Goals/GoalType/WaterGoal";
import classes from "./UserWelcome.module.css";


const UserWelcome = () => {

    const authCtx = useContext(AuthContext);
    
    const nameHolder = localStorage.getItem("firstName");
    const [firstname, setFirstName] = useState(nameHolder);
    
    
    
    var today = new Date();
    console.log(today);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    
    

    const fetchFirstName = async () => {
        const response = await fetch(
            'http://localhost:8080/api/users/'+authCtx.UUID,
            {
                headers: {
                    
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                } 
            }
            
        )
        
        const data = await response.json();
        const firstName = data.Firstname;
        setFirstName(firstName);
        localStorage.setItem("firstName", firstName);
        
    }

    useEffect(() => {
        if(localStorage.getItem("firstName") === null){
            fetchFirstName();
            
        }
    })

    return(
        <Fragment>
            <div className={classes.welcome}>
                <h1>Welcome {firstname}!</h1>
                <h1>Today's Date is {today}</h1>
                
            </div>
            <div className={classes.goals}>
                <div className={classes.container1}>
                    <SleepGoal />
                </div>
                <StepsGoal />
                <div className={classes.container2}>
                <WaterGoal />
                </div>
            </div>
        </Fragment>
    )

}

export default UserWelcome;