import React from 'react';
import classes from './DonutChart.module.css';
import { PieChart, Pie, Tooltip, Cell } from 'recharts'; 

const DonutChart = () => {

    const COLORS = ["#8884d8", "#82ca9d"];

    const data = [
        {name: 'Test', students: 40},
        {name: 'Test2', students: 80}
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
            data={data}
            dataKey="students"
            outerRadius={200}
            innerRadius={120}
            fill="blue">

            {data.map((entry, index) => (
                <Cell 
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                />

            ))}

            </Pie>
        <Tooltip content={<CustomTooltip />} />
        </PieChart>
        </div>

    );

};

export default DonutChart;