'use strict';

// global var
// Track what they will be clicking on/ what will have events tied to
var imageLeft = document.getElementById('left');
var imageRight = document.getElementById('right');
var imageSelector = document.getElementById('click-me');
var imageLeftArrayIndex = 0;
var imageRightArrayIndex = 0;

// store images: imageArray[]
var allImages = [];

// Image constructor
var Images = function(src, name, ){
    this.likes = 0;
    this.src = src;
    this.name = name;
    this.appeared = 0;
    
    allImages.push(this);
};

// prototypes
Images.prototype.renderImage = function(){
    imageLeft.src = this.src;
};

// event listner and handler
var imageClickHandler = function(eventObject){
    do {
        var randomNumber = Math.floor(Math.random() * allImages.length);
    } while (randomNumber === imageLeftArrayIndex);
    
    allImages[imageLeftArrayIndex].likes++;
    allImages[imageLeftArrayIndex].appeared++;

    imageLeftArrayIndex = randomNumber;
    event.target.src = allImages[randomNumber].src;
}

imageLeft.addEventListener('click', imageClickHandler);

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
