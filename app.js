'use strict';

// global var
// Track what they will be clicking on/ what will have events tied to
var imageLeft = document.getElementById('left');
var imageMiddle = document.getElementById('middle');
var imageRight = document.getElementById('right');
var imageSelector = document.getElementById('click-me');
var leftImageText = document.getElementById('left-text');
var middleImageText = document.getElementById('middle-text');
var rightImageText = document.getElementById('right-text');
var currentLeftImageArrayIndex = 0;
var currentMiddleImageArrayIndex = 1;
var currentRightImageArrayIndex = 2;
var clickCount = 0;
var allImages = [];
var chartItems = [];

// Image constructor
var BusMallImages = function(src, name){
  this.src = src;
  this.name = name;
  this.appeared = 0;
  this.likes = 0;

  chartItems.push(this);
};

new BusMallImages('./img/bag.jpg', 'R2D2 Roller Bag');
new BusMallImages('./img/banana.jpg', 'Banana Slicer');
new BusMallImages('./img/bathroom.jpg', 'Bathroom TP and Tablet Holder');
new BusMallImages('./img/boots.jpg', 'Boot Sandles');
new BusMallImages('./img/breakfast.jpg', 'Toaster Oven Coffee Combo');
new BusMallImages('./img/bubblegum.jpg', 'Bubblegum');
new BusMallImages('./img/chair.jpg', 'Chair');
new BusMallImages('./img/cthulhu.jpg', 'Demon');
new BusMallImages('./img/dog-duck.jpg', 'Best Friend');
new BusMallImages('./img/dragon.jpg', 'Dragon Stew');
new BusMallImages('./img/pen.jpg', 'Best Pen Caps');
new BusMallImages('./img/pet-sweep.jpg', 'Entertainment');
new BusMallImages('./img/scissors.jpg', 'Pizza Scissors');
new BusMallImages('./img/shark.jpg', 'Shark Sleeping Bag');
new BusMallImages('./img/sweep.png', 'Baby Cleaning Service');
new BusMallImages('./img/tauntaun.jpg', 'Correct Childhood');
new BusMallImages('./img/unicorn.jpg', 'Rainbow Stew');
new BusMallImages('./img/usb.gif', 'Theres a snake in by BOOT!');
new BusMallImages('./img/water-can.jpg', 'Garden Hijinks');
new BusMallImages('./img/wine-glass.jpg', 'AA Aid');

var localObjects = function(){
  if(localStorage.getItem('allObjects')){
    allImages = JSON.parse(localStorage.getItem('allObjects'));
  }else{
    allImages.push(new BusMallImages('./img/bag.jpg', 'R2D2 Roller Bag'));
    allImages.push(new BusMallImages('./img/banana.jpg', 'Banana Slicer'));
    allImages.push(new BusMallImages('./img/bathroom.jpg', 'Bathroom TP and Tablet Holder'));
    allImages.push(new BusMallImages('./img/boots.jpg', 'Boot Sandles'));
    allImages.push(new BusMallImages('./img/breakfast.jpg', 'Toaster Oven Coffee Combo'));
    allImages.push(new BusMallImages('./img/bubblegum.jpg', 'Bubblegum'));
    allImages.push(new BusMallImages('./img/chair.jpg', 'Chair'));
    allImages.push(new BusMallImages('./img/cthulhu.jpg', 'Demon'));
    allImages.push(new BusMallImages('./img/dog-duck.jpg', 'Best Friend'));
    allImages.push(new BusMallImages('./img/dragon.jpg', 'Dragon Stew'));
    allImages.push(new BusMallImages('./img/pen.jpg', 'Best Pen Caps'));
    allImages.push(new BusMallImages('./img/pet-sweep.jpg', 'Entertainment'));
    allImages.push(new BusMallImages('./img/scissors.jpg', 'Pizza Scissors'));
    allImages.push(new BusMallImages('./img/shark.jpg', 'Shark Sleeping Bag'));
    allImages.push(new BusMallImages('./img/sweep.png', 'Baby Cleaning Service'));
    allImages.push(new BusMallImages('./img/tauntaun.jpg', 'Correct Childhood'));
    allImages.push(new BusMallImages('./img/unicorn.jpg', 'Rainbow Stew'));
    allImages.push(new BusMallImages('./img/usb.gif', 'Theres a snake in by BOOT!'));
    allImages.push(new BusMallImages('./img/water-can.jpg', 'Garden Hijinks'));
    allImages.push(new BusMallImages('./img/wine-glass.jpg', 'AA Aid'));
  }
};
localObjects();

// prototypes
BusMallImages.prototype.renderImage = function(){
  imageLeft.src = this.src;
  imageMiddle = this.src;
  imageRight = this.src;
};

var renderImageLikedList = function(images){
  var listContainer = document.getElementById('selected');
  var liEl = document.createElement('li');
  liEl.textContent = images.name + ' was clicked: ' + images.likes;
  listContainer.appendChild(liEl);
};

var likedList = function(){
  for(var i in allImages){
    renderImageLikedList( allImages[i]);
  }
};
// event listner and handler
var imageClickHandler = function(event){
  //when i get the event back
  if(event.target.id === 'left' || event.target.id === 'right' || event.target.id === 'middle'){

    do {
      var randomNumberLeft = Math.floor(Math.random() * allImages.length);
    } while (randomNumberLeft === currentLeftImageArrayIndex || randomNumberLeft === currentRightImageArrayIndex || randomNumberLeft === currentMiddleImageArrayIndex);

    do {
      var randomNumberMiddle = Math.floor(Math.random() * allImages.length);
    } while (randomNumberMiddle === currentLeftImageArrayIndex || randomNumberMiddle === currentRightImageArrayIndex || randomNumberMiddle === currentMiddleImageArrayIndex || randomNumberMiddle === randomNumberLeft);

    do {
      var randomNumberRight = Math.floor(Math.random() * allImages.length);
    } while (randomNumberRight === currentRightImageArrayIndex || randomNumberRight === currentMiddleImageArrayIndex || randomNumberRight === currentRightImageArrayIndex || randomNumberRight === randomNumberLeft || randomNumberRight ===randomNumberMiddle);

    if(event.target.id === 'left'){
      allImages[currentLeftImageArrayIndex].likes++;
      chartItems[currentLeftImageArrayIndex].likes++;
      console.log('left was clicked');
    } else if(event.target.id === 'right'){
      allImages[currentRightImageArrayIndex].likes++;
      chartItems[currentRightImageArrayIndex].likes++;
      console.log('right was clicked');
    } else {
      allImages[currentMiddleImageArrayIndex].likes++;
      chartItems[currentMiddleImageArrayIndex].likes++;
      console.log('middle was clicked');
    }

    allImages[currentLeftImageArrayIndex].appeared++;
    chartItems[currentLeftImageArrayIndex].appeared++;

    allImages[currentMiddleImageArrayIndex].appeared++;
    chartItems[currentMiddleImageArrayIndex].appeared++;

    allImages[currentRightImageArrayIndex].appeared++;
    chartItems[currentRightImageArrayIndex].appeared++;

    currentLeftImageArrayIndex = randomNumberLeft;
    currentMiddleImageArrayIndex = randomNumberMiddle;
    currentRightImageArrayIndex = randomNumberRight;

    imageLeft.src = allImages[randomNumberLeft].src;
    imageMiddle.src = allImages[randomNumberMiddle].src;
    imageRight.src = allImages[randomNumberRight].src;
    leftImageText.textContent = allImages[randomNumberLeft].name;
    middleImageText.textContent = allImages[randomNumberMiddle].name;
    rightImageText.textContent = allImages[randomNumberRight].name;

    localStorage.setItem('allObjects', JSON.stringify(allImages));
    clickCount++;
    if(clickCount === 25){ //tells use we have clicked 15 times
      localStorage.setItem('allObjects', JSON.stringify(allImages));
      likedList();
      renderChart();

      //stop listening
      imageSelector.removeEventListener('click', imageClickHandler);
    }
  }
};

imageSelector.addEventListener('click', imageClickHandler);

//==================================
//Chart
//==================================

var min = 0;
var max = 255;

var randomColor = function(){
  var rgba1 = Math.floor(Math.random() * (max - min));
  var rgba2 = Math.floor(Math.random() * (max - min));
  var rgba3 = Math.floor(Math.random() * (max - min));

  var color ='rgba(' + rgba1 + ', ' + rgba2 + ', ' + rgba3 + ')';
  return color;
};

var ctx = document.getElementById('chart').getContext('2d');

var renderChart = function(){

  var imageNames = [];
  var imageLikes = [];
  var imageShowed = [];
  var colors = [];
  var appearedColor = [];

  var grayFinal = function(){
    for(var i =0; i < 20; i++)
      appearedColor.push('rgba(85, 85, 85');
  };

  var rgbaFinal = function(){
    for(var i = 0; i < 20; i++)
      colors.push(randomColor());
  };

  grayFinal();
  rgbaFinal();

  for (var i in chartItems){
    imageNames.push(chartItems[i].name);
    imageLikes.push(chartItems[i].likes);
    imageShowed.push(chartItems[i].appeared);
    colors.push('black');
  }

  var chartData = {
    labels: imageNames,
    datasets: [{
      label: 'Bus Mall Chart',
      data: imageLikes,
      backgroundColor: colors,
      borderColor: colors,
      borderWidth: 1
    },
    {
      label: 'Times Images Were Shown',
      data: imageShowed,
      backgroundColor: appearedColor,
      borderColor: appearedColor,
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
    },
    animation: {
      duration: 1400,
    },
    responsive: true,
  };

  var barChart = {
    type: 'horizontalBar',
    data: chartData,
    options: chartOptions
  };


  //render the chart
  var myChart = new Chart(ctx , barChart);
};
