var canvas = document.getElementById("sales-by-day");
var jsonfile = {
    "jsonarray": [{
        "day": "Mon",
        "sales": 12
    }, {
        "day": "Tues",
        "sales": 14
    }, {
        "day": "Wed",
        "sales": 19
    }, {
        "day": "Thurs",
        "sales": 24
    }, {
        "day": "Fri",
        "sales": 17
    }, {
        "day": "Sat",
        "sales": 7
    }, {
        "day": "Sun",
        "sales": 15
    }]
};

var labels = jsonfile.jsonarray.map(function (e) {
    return e.day;
});
var data = jsonfile.jsonarray.map(function (e) {
    return e.sales;
});;

var ctx = canvas.getContext('2d');
var config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Daily Sales',
            data: data,
            backgroundColor: 'rgba(0, 119, 204, 0.3)'
        }],
    },
    options: {
        title:{
            display:true,
            text:'Total Number of games sold this month',
            fontSize:25
        },
    }
};
Chart.defaults.global.defaultFontColor = 'black';
var chart = new Chart(ctx, config);