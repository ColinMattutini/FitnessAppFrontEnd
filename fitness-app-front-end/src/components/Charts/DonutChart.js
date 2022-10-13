import React, { Fragment, useContext } from 'react';
// import { useRef } from 'react';
import { useState } from 'react';
import classes from './DonutChart.module.css';
import { PieChart, Pie, Tooltip, Cell } from 'recharts'; 
import TotalCaloriesGoal from './TotalCaloriesGoal';
import AuthContext from '../../context/user-auth';


const DonutChart = (props) => {

    const authCtx = useContext(AuthContext);

    const fetchCalorieGoalHandler = async (calorie) => {
        try{
            const response = await fetch(
                "http://localhost:8080/api/caloriegoal/"+authCtx.UUID
            
                
            );
            if(!response.ok) {
                throw new Error ('Get Request Failed.');
            }

            const data =  await response.json();
            console.log("FetchCalorieGoalHandler got Here");
            const loadedGoal = [];
        
        for(const foodKey in data){
            
            loadedGoal.push({
                
                calories: data[foodKey].calorieGoal,
                
            });
        };
            setCalorieGoal(loadedGoal[0].calorieGoal);
            console.log(dailyCalorieGoal);
              
            
            
        }catch{
            
        }
    }

    const [dailyCalorieGoal, setCalorieGoal] = useState('');
   
    const [showGoalModal, setGoalModal] = useState(false);
    const COLORS = ["#eb4343", "#acff75"];

    const showCalorieGoalModalHandler = (event) => {
        setGoalModal(true);
    }

    const hideCalorieGoalModalHandler = () => {
        setGoalModal(false);
        fetchCalorieGoalHandler();
    }

    // const calorieGoalHandler = (data) => {
    //      setCalorieGoal(data);
    //  }

    



    const calorieCount = [];
    // const constantCalorieGoal = 2400;
    let totalCalories = 0;

    
    
    for(const i in props.foodArray){
        // console.log(props.foodArray[i].calories)
        totalCalories += (+props.foodArray[i].calories);
        calorieCount.push({
            id: props.foodArray[i].key,
            calories: +props.foodArray[i].calories
            
        });
    };
    console.log(totalCalories);
    let calorieGoal = dailyCalorieGoal - totalCalories;
    let calorieDifference = [
        {name: 'CalorieGoal', calories: calorieGoal}, 
        {name: 'Total Calories', calories: totalCalories}
    ];

    const CustomTooltip = ({active, payload, label}) => {
        if(active) {
            return(
                <div className="custom-tooltip"
                style={{
                    backgroundColor: "#ffff",
                    padding: "5px",
                    border: "1px solid #cccc"
                }}
                >
                    <label>{`${payload[0].name} : ${payload[0].value}`}</label>
                </div>
            );
        }
        return null;
    };


    return(
        <Fragment>
        <div className={classes.donutChart}>
        <PieChart width={500} height={500}>
            <Pie 
            data={calorieDifference}
            dataKey="calories"
            outerRadius={200}
            innerRadius={120}
            fill="blue">

            {calorieCount.map((entry, index) => (
                <Cell 
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                />

            ))}
            </Pie>
        <Tooltip content={<CustomTooltip />} />
        </PieChart>

        
        <div className={classes.label}>
            {/* <TotalCaloriesGoal /> */}
            <h1> Your Total Calories For Today Is: {totalCalories}</h1>
            {/* <input value={dailyCalorieGoal} onChange={calorieGoalHandler}/> */}
            
            <button onClick={showCalorieGoalModalHandler}>Change Calorie Goal</button> 
            <button onClick={fetchCalorieGoalHandler} />
        </div>
        
    </div>
    {showGoalModal && <TotalCaloriesGoal  hideCalorieGoalModalHandler={hideCalorieGoalModalHandler} 
        // calorieGoalHandler={calorieGoalHandler}
    />}
   
    </Fragment>

    );

};

export default DonutChart;