// CHART DOC

'use strict';

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: 'Derek Schoeman',
        data: [
            0, 1, 4, 8, 6, 5, 8
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.8)'
      },
      {
        label: 'Wayne Viktor',
        data: [
            0, 4, 5, 5, 6, 5, 10
        ],
        backgroundColor: 'rgba(205, 24, 24, 0.8)'
      },
      {
        label: 'Greg Harmse',
        data: [
            0, 4, 7, 4, 7, 9, 6
        ],
        backgroundColor: 'rgba(70, 78, 173, 0.8)'
      }
    ]
}
var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        title:{
            display:true,
            text:'Number of games sold this month',
            fontSize:25
        },
        legend:{
            display:true,
            position:'top',
            lebels:{
                fontColor:'#000'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
              
            }]
        }
    }
});