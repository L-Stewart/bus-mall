'use strict';

// global var
// Track what they will be clicking on/ what will have events tied to
var imageLeft = document.getElementById('left');
var imageMiddle = document.getElementById('middle');
var imageRight = document.getElementById('right');
var imageSelector = document.getElementById('click-me');
var leftImageText = document.getElementById('left-text');
var middleImageText = document.getElementById('middle-text')
var rightImageText = document.getElementById('right-text');
var currentLeftImageArrayIndex = 0;
var currentMiddleImageArrayIndex = 1;
var currentRightImageArrayIndex = 2;
var clickCount = 0;


// store images: imageArray[]
var allImages = [];

// Image constructor
var BusMallImages = function(src, name){
  this.src = src;
  this.name = name;
  this.appeared = 0;
  this.likes = 0;

  allImages.push(this);
};

new BusMallImages('/img/bag.jpg', 'R2D2 Roller Bag');
new BusMallImages('/img/banana.jpg', 'Banana Slicer');
new BusMallImages('/img/bathroom.jpg', 'Bathroom TP and Tablet Holder');
new BusMallImages('/img/boots.jpg', 'Boot Sandles');
new BusMallImages('/img/breakfast.jpg', 'Toaster Oven Coffee Combo');
new BusMallImages('/img/bubblegum.jpg', 'Bubblegum');
new BusMallImages('/img/chair.jpg', 'Chair');
new BusMallImages('/img/cthulhu.jpg', 'Demon');
new BusMallImages('/img/dog-duck.jpg', 'Best Friend');
new BusMallImages('/img/dragon.jpg', 'Stew');
new BusMallImages('/img/pen.jpg', 'Best Pen Caps');
new BusMallImages('/img/pet-sweep.jpg', 'Entertainment');
new BusMallImages('/img/scissors.jpg', 'Pizza Scissors');
new BusMallImages('/img/shark.jpg', 'Shark Sleeping Bag');
new BusMallImages('/img/sweep.jpg', 'Baby Cleaning Service');
new BusMallImages('/img/tauntaun.jpg', 'Correct Childhood');
new BusMallImages('/img/unicorn.jpg', 'Rainbow Stew');
new BusMallImages('/img/usb.gif', 'Theres a snake in by boot!');
new BusMallImages('/img/wine-glass.jpg', 'AA Aid');


// prototypes
BusMallImages.prototype.renderImage = function(){
  imageLeft.src = this.src;
  imageMiddle = this.src;
  imageRight = this.src;
};



// // event listner and handler
// var imageClickHandler = function(event){
//   //when i get the event back
//   if(event.target.id === 'left' || event.target.id === 'right' || event.target.id === 'middle'){

//     do {
//       var randomNumberLeft = Math.floor(Math.random() * allImages.length);
//     } while (randomNumberLeft === currentLeftImageArrayIndex || randomNumberLeft === currentRightImageArrayIndex);

//     do {
//       var randomNumberMiddle = Math.floor(Math.random() * allImages.length);
//     } while (randomNumberLeft === currentLeftImageArrayIndex || randomNumberLeft === currentRightImageArrayIndex);

//     do {
//       var randomNumberRight = Math.floor(Math.random() * allImages.length);
//     } while (randomNumberRight === currentLeftImageArrayIndex || randomNumberRight === randomNumberLeft || randomNumberRight === currentRightImageArrayIndex);

//     if(event.target.id === 'left'){
//       allImages[currentLeftImageArrayIndex].likes++;
//       console.log('left was clicked');
//     } else{
//       allImages[currentRightImageArrayIndex].likes++;
//       console.log('right was clicked');
//     }

//     allImages[currentLeftImageArrayIndex].appeared++;
//     allImages[currentRightImageArrayIndex].appeared++;

//     currentLeftImageArrayIndex = randomNumberLeft;
//     currentRightImageArrayIndex = randomNumberRight;

//     // event.target.src = allImages[randomNumber].src;
//     imageLeft = allImages[randomNumberLeft].src;
//     imageMiddle = allImages[randomNumberMiddle].src;
//     imageRight = allImages[randomNumberRight].src;
//     leftImageText.textContent = allImages[randomNumberLeft].name;
//     middleImageText.textContent = allImages[randomNumberMiddle].name;
//     rightImageText.textContent = allImages[randomNumberLeft].name;

//     clickCount++;
//     if(clickCount === 15){ //tells use we have clicked 15 times
//       renderChart();


//       //stop listening
//       imageSelector.removeEventListener('click', imageClickHandler);
//     }
//   }
// };

// imageSelector.addEventListener('click', imageClickHandler);


//=========================================================================================================================
// var imageClickHandler = function(event){
//     do {
//         var randomNumber = Math.floor(Math.random() * allImages.length);
//     } while (randomNumber === imageLeftArrayIndex);

//     allImages[imageLeftArrayIndex].likes++;
//     allImages[imageLeftArrayIndex].appeared++;

//     imageLeftArrayIndex = randomNumber;
//     event.target.src = allImages[randomNumber].src;
// }

// Track likes: start at 0 and increment when clicked
// images themselves (src)
// text
// size
// how many times it appeared
// store its index??

// user wants to click
// event listner and handler
// tie the listner to a section

// pages needs to change
// 1. change image itself
// 2. change the description
// 3. prevent image from repeating directly
// increment the clicked on images likes
// Stretch- check images for appearing
// Stretch- give user feedback on most liked images



//==================================
//Chart
//==================================




// var renderChart = function(){

//   var imageNames = [];
//   var imageLikes = [];
//   var colors = [];
//   for (var i in allImages){
//     imageNames.push(allImages[i].name);
//     imageLikes.push(allImages[i].likes);
//     colors.push('black');
//   }

//   var chartData = {
//     labels: imageNames,
//     datasets: [{
//       label: 'Bus Mall Chart',
//       data: imageLikes,
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
//     }],
//   };

//   var chartOptions = {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero:true
//         }
//       }]
//     },
//     animation: {
//       duration: 1200,
//     },
//     responsive: true,
//   };

//   var barChart = {
//     type: 'horizontalBar',
//     data: chartData,
//     options: chartOptions
//   };


//   //render the chart
//   var myChart = new Chart(ctx , barChart);
// };
