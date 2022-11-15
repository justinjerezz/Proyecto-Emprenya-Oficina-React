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

const scores = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const labels = [1, 2, 3, 4, 5 , 6 ,7 ,8, 9, 10, 11, 12]

const options = {
    responsive:false,
    scales: {
        y:{
            display: false
        },
        x:{
            title:{
                display: false
            }
        }
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
                backgroundColor: "red",
                borderColor:"red"
            }
        ],
        labels
        };
    }, []);

    return <Line data={data} options = {options} />
}