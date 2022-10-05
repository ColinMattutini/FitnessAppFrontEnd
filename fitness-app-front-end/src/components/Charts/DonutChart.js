import React from 'react';
// import { useRef } from 'react';
import { useState } from 'react';
import classes from './DonutChart.module.css';
import { PieChart, Pie, Tooltip, Cell } from 'recharts'; 
import TotalCaloriesGoal from './TotalCaloriesGoal';


const DonutChart = (props) => {

    const [dailyCalorieGoal, setCalorieGoal] = useState('');
    const COLORS = ["#eb4343", "#acff75"];

    const calorieGoalHandler = (event) => {
        setCalorieGoal(event.target.value);
    };

    const calorieCount = [];
    const constantCalorieGoal = 2400;
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
    let calorieGoal = constantCalorieGoal - totalCalories;
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
        </div>
        
    </div>

    );

};

export default DonutChart;