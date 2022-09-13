import React from 'react';
import classes from './DonutChart.module.css';
import { PieChart, Pie, Tooltip, Cell } from 'recharts'; 
import TotalCaloriesGoal from './TotalCaloriesGoal';


const DonutChart = (props) => {

    const COLORS = ["#8884d8", "#82ca9d"];

    // const data = [
    //     {name: 'Test', students: 40},
    //     {name: 'Test2', students: 80}
    // ];

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
    let calorieGoal = 2400 - totalCalories;
    let calorieDifference = [
        {'calories': calorieGoal}, 
        {'calories': totalCalories}
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
                    <label>{`${payload[0].id} : ${payload[0].value}`}</label>
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
            <TotalCaloriesGoal />
        </div>
    </div>

    );

};

export default DonutChart;