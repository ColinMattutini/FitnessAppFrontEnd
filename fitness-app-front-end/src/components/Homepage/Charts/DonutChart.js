import React, { Fragment, useContext, useEffect } from 'react';
// import { useRef } from 'react';
import { useState } from 'react';
import classes from './DonutChart.module.css';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer} from 'recharts'; 
import TotalCaloriesGoal from './TotalCaloriesGoal';
import AuthContext from '../../../context/user-auth';
import { AutoSizer } from 'react-virtualized';


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
            setCalorieGoal(data);
            console.log(data);
              
            
            
        }catch{
            
        }
    }

    useEffect(() => {
        fetchCalorieGoalHandler();
    }, []);

    const [dailyCalorieGoal, setCalorieGoal] = useState(2400);
   
    const [showGoalModal, setGoalModal] = useState(false);
    const COLORS = ["#eb4343", "#acff75"];

    const showCalorieGoalModalHandler = (event) => {
        setGoalModal(true);
    }

    const hideCalorieGoalModalHandler = () => {
        setGoalModal(false);
        fetchCalorieGoalHandler();
    }
    const calorieCount = [];
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
                    padding: "1px",
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
       <ResponsiveContainer width="100%" height="75%">
        <PieChart>
            <Pie 
        
            data={calorieDifference}
            dataKey="calories"
            outerRadius={140}
            innerRadius={80}
            fill="blue"
            >

            {calorieCount.map((entry, index) => (
                <Cell 
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                />

            ))}
            </Pie>
        <Tooltip content={<CustomTooltip />} />
        </PieChart>
        </ResponsiveContainer>
        
       
    <div className={classes.label}>
            {/* <TotalCaloriesGoal /> */}
            <h1> Your Total Calories For Today Is: {totalCalories}</h1>
            {/* <input value={dailyCalorieGoal} onChange={calorieGoalHandler}/> */}
            
            <button onClick={showCalorieGoalModalHandler}>Change Calorie Goal</button> 
            
        </div>
    {showGoalModal && <TotalCaloriesGoal  hideCalorieGoalModalHandler={hideCalorieGoalModalHandler} 
        // calorieGoalHandler={calorieGoalHandler}
    />}
   
    </Fragment>

    );

};

export default DonutChart;