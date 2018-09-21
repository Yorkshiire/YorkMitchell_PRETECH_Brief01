'use strict';
var canvas = document.getElementById("sales-canvas");
// Apply multiply blend when drawing datasets
var multiply = {
  beforeDatasetsDraw: function(chart, options, el) {
    chart.ctx.globalCompositeOperation = 'multiply';
  },
  afterDatasetsDraw: function(chart, options) {
    chart.ctx.globalCompositeOperation = 'source-over';
  },
};

// Gradient color - this week
var gradientThisWeek = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientThisWeek.addColorStop(0, '#5555FF');
gradientThisWeek.addColorStop(1, '#9787FF');



var config = {
    type: 'doughnut',
    data: {
        labels: ["Derek", "Wayne", "Greg"],
        datasets: [
          {
              label: 'percentage of orders',
              data: [30, 40, 30],
              backgroundColor: ['black','green','blue'],
              borderColor: 'transparent',
              pointBackgroundColor: '#FFFFFF',
              pointBorderColor: '#FFFFFF',
              lineTension: 0.40,
          },
        ]
    },
    options: {
    		elements: { 
        	point: {
          	radius: 0,
          	hitRadius: 5, 
            hoverRadius: 5 
          } 
        },
    		legend: {
        		display: true,
        },
       
    },
    plugins: [multiply],
};

window.chart = new Chart(canvas, config);