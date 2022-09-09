import React from 'react';
import { PieChart, Pie } from 'recharts'; 

const DonutChart = () => {

    const data = [
        {name: 'Test', students: 40},
        {name: 'Test2', students: 80}
    ];
    

    return(
        <PieChart width={650} height={650}>
            <Pie 
            data={data}
            dataKey="students"
            outerRadius={200}
            innerRadius={120}
            fill="blue" />
        </PieChart>

    );

};

export default DonutChart;