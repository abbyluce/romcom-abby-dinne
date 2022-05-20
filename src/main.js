// // Create variables targetting the relevant DOM elements here 👇
var randomTitle = document.querySelector(".cover-title");
randomTitle.innerText = Cover.title

var randomImage = document.querySelector(".cover-image");
randomImage.innerHTML = Cover.coverImgSrc

var randomTagline1 = document.querySelector(".tagline-1");
randomTagline1.innerText = Cover.descriptor1

var randomTagline2 = document.querySelector(".tagline-2");
randomTagline2.innerText = Cover.descriptor2

var newRandomButton = document.querySelector(".random-cover-button");

var newSaveButton = document.querySelector(".save-cover-button");

var newViewButton = document.querySelector(".view-saved-button");

var newMakeButton = document.querySelector(".make-new-button");


// // We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover; 

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(arrays) {
  return Math.floor(Math.random() * arrays.length);
}
// console.log(getRandomIndex());
