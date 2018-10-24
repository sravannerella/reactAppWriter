import React, {Component} from 'react';
import {Line}  from 'react-chartjs-2';

var lineData = {
    labels: ['July', 'August', 'September', 'October'],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#fff',
            borderColor: '#fff',
            borderCapStyle: 'round',
            borderDash: [],
            pointBorderColor: '#fff',
            pointHoverRadius: 7,
            pointHoverBackgroundColor: '#fff',
            pointRadius: 4,
            data: [10,20,30,50]
        }
    ]
};

const options = {
    responsive: true,
    legend: {
        display: false,
        labels: {
            fontColor: '#fff'
        }
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    fontColor: '#fff'
                },
                gridLines: {
                    display: false
                }
            }
        ],
        xAxes: [
            {
                ticks: {
                    fontColor: '#fff'
                },
                gridLines: {
                    display: false
                }
            }
        ]
    }
}

export default class LinesGraph extends Component{

    componentWillMount(){
        this.setState({
            data: lineData
        });
    }

    componentWillUnmount(){
        clearInterval(this.state.timer);
    }

    componentDidMount(){
        let time = setInterval(() => {

            let randomizedData = this.state.data;
            let count = randomizedData.labels.length;
            let dataArr = [];
            for(var i=0;i<count;i++){
                let val = Math.floor(Math.random() * 50 + 1);
                dataArr.push(val);
            }
            randomizedData.datasets[0].data = dataArr;

            this.setState({
                data: randomizedData
            });
        }, 5000);

        this.setState({
            timer: time
        });
    }

    render(){
        return(
            <Line data={this.state.data} options={options} redraw={false}></Line>
        );
    }
}