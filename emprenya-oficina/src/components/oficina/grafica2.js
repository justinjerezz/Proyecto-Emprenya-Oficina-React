import React, {useMemo} from 'react';
import 'chart.js/auto'; 
import {
    Chart as ChartJS,
    CategoryScale, 
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import 'chart.js/auto';

import {Line} from "react-chartjs-2";

ChartJS.register(
    CategoryScale, 
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const scores = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const labels = [0, 1, 2, 3, 4, 5 , 6 ,7 ,8, 9, 10, 11]

const options = {
    responsive:true,
    scales: {
        y:{
            display: false
        },
        x:{
            ticks: {
                color: 'white'
            },
            grid: {
                color: 'white'
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
    },
  
}

export function Grafica2(){
    const data= useMemo(function(){
        return {
            datasets : [
                {
                label: 'Mis datos',
                data: scores,
                backgroundColor: "#d9d9d9",
                borderColor:"red",
                tension: .4,
                fill:true
            }
        ],
        labels
        };
    }, []);

    return <Line data={data} options = {options} />
}