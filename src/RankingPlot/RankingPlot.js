import React from 'react';
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

    componentDidMount() {
        this.chartDom = document.getElementById('ranking-plot-container');

        this.rankingPlot = echarts.init( this.chartDom);

        this.rankingPlot.setOption(this.plotOptions);
    }

    render() {
        return <div id="ranking-plot-container"></div>;
    }
}