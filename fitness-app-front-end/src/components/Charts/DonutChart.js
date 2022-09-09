import React from 'react';
import classes from './DonutChart.module.css';
import { PieChart, Pie } from 'recharts'; 

const DonutChart = () => {

    const data = [
        {name: 'Test', students: 40},
        {name: 'Test2', students: 80}
    ];
    

    return(
        <div className={classes.donutChart}>
        <PieChart width={500} height={500}>
            <Pie 
            data={data}
            dataKey="students"
            outerRadius={200}
            innerRadius={120}
            fill="blue" />
        </PieChart>
        </div>

    );

};

export default DonutChart;