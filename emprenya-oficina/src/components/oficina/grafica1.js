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

const scores = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const labels = [1, 2, 3, 4, 5 , 6 ,7 ,8, 9, 10, 11, 12]

const options = {
    responsive:false,
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
            },
            borderColor: "red",

        },
        
    },
    plugins: {
        legend: {
            display: false
        },
    },
  
}

export default function Grafica1(){
    const data= useMemo(function(){
        return {
            datasets : [
                {
                label: 'Mis datos',
                data: scores,
                backgroundColor: "blue",
                showLine: false 
            }
        ],
        labels
        };
    }, []);

    return <Bar data={data} options = {options} />
}