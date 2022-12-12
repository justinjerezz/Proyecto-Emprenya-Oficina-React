import React, {useMemo} from 'react';
import 'chart.js/auto'; 
import {
    Chart as ChartJS,
    CategoryScale, 
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import 'chart.js/auto';

import {Bar} from "react-chartjs-2";

ChartJS.register(
    CategoryScale, 
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const scores = [0.1, 1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]

const labels = [0, 1, 2, 3, 4, 5 , 6 ,7 ,8, 9, 10, 11]

const options = {
    responsive:true,
    scales: {
        yAxes:{
            display: false
        },
        x:{
            ticks: {
                color: 'white'
            },
            grid: {
                color: 'white'
            }

            
            
        },
        
    },
    plugins: {
        legend: {
            display: false
        },
    },
  
}

export function Grafica1(){
    const data= useMemo(function(){
        return {
            datasets : [
                {
                label: 'Mis datos',
                data: scores,
                backgroundColor: "red",
                showLine: false,
                width:"100%",
                height:"100%"
            }
        ],
        labels
        };
    }, []);

    return <Bar data={data} options = {options} />
}