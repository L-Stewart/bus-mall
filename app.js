'use strict';

// global var
// Track what they will be clicking on/ what will have events tied to
var imageLeft = document.getElementById('left');
var imageRight = document.getElementById('right');
var imageSelector = document.getElementById('click-me');
var leftImageText = document.getElementById('left-text');
var rightImageText = document.getElementById('right-text');
var currentLeftImageArrayIndex = 0;
var currentRightImageArrayIndex = 1;


// store images: imageArray[]
var allImages = [];

// Image constructor
var Images = function(src, name){
  this.src = src;
  this.name = name;
  this.appeared = 0;
  this.likes = 0;

  allImages.push(this);
};

// prototypes
Images.prototype.renderImage = function(){
  imageLeft.src = this.src;
};

// event listner and handler
var imageClickHandler = function(event){
  //when i get the event back
  if(event.target.id === 'left' || event.target.id === 'right'){

    do {
      var randomNumberLeft = Math.floor(Math.random() * allImages.length);
    } while (randomNumberLeft === currentLeftImageArrayIndex || randomNumberLeft === currentRightImageArrayIndex);

    do {
      var randomNumberRight = Math.floor(Math.random() * allImages.length);
    } while (randomNumberRight === currentLeftImageArrayIndex || randomNumberRight === randomNumberLeft || randomNumberRight === currentRightImageArrayIndex);

    if(event.target.id === 'left'){
      allImages[currentLeftImageArrayIndex].likes++;
      console.log('left was clicked');
    } else{
      allImages[currentRightImageArrayIndex].likes++;
      console.log('right was clicked');
    }

    allImages[currentLeftImageArrayIndex].appeared++;
    allImages[currentRightImageArrayIndex].appeared++;

    currentLeftImageArrayIndex = randomNumberLeft;
    currentRightImageArrayIndex = randomNumberRight;

    // event.target.src = allImages[randomNumber].src;
    imageLeft = allImages[randomNumberLeft].src;
    imageRight = allImages[randomNumberRight].src;
    leftImageText.textContent = allImages[randomNumberLeft].name;
    rightImageText.textContent = allImages[randomNumberLeft].name;
  }
};

imageSection.addEventListener('click', imageClickHandler);

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
