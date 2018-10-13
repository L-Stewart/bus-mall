'use strict';

var ctx = document.getElementById('chart').getContext('2d');
console.log(ctx);

var chartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }],
};

var chartOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
};

var barChart = {
  type: 'bar',
  data: chartData,
  options: chartOptions
};

var myChart = new Chart(ctx , barChart);

// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255,99,132,1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero:true
//         }
//       }]
//     }
//   }
// });



var busmalContainer = document.getElementById('busmal');
//collect all document element references we need

//references to current images on the page
var image = function(parameters, values){
    //builds images
};

var allImages = [];

var chooseNewImage(){
    //choose 3 new random images that dont repeat from the current images or eachother
    //change the source of the 3 images on the page
    //document.getElementById
    //counter for all of our clicks
}

var handleBusmalClick = function(event){
//check to make sure we click on the right thing (image)

//incerment the correct images likes

//increment all current images appeared count

//call choose new image function()

//incerement the total clicks on the page

//test if we have clicked 25 times
  //shut listner off
  //make chart appear
};


//instantiate all new images
busmalContainer.addEventListener('click', handleBusmalClick);

//==========================================================
//charts
//==========================================================

//function to render the chart

var renderChart = function() {
    //chartjs needs ctx


        //collect all data
        //we need labels, data values, colors

        //create a data object that gets past all our other arrays, based off of the example from chartjs


    //call a new chart and pass in ctx and our data
};
