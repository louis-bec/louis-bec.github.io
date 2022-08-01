import React from 'react';
import ReactEcharts from "echarts-for-react";
import './RankingPlot.css';

import * as echarts from 'echarts';


export class RankingPlot extends React.Component {

    constructor() {
        super();

        this.plotOptions = {
            xAxis: {
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {},
            series: [
                {
                    type: 'bar',
                    data: [23, 24, 18, 25, 27, 28, 25]
                }
            ]
        };

    }

    getOptions() {
        return this.plotOptions
    }


    render() {
        return <ReactEcharts option={this.getOptions()} opts={{renderer: 'svg'}}/>
    }
}