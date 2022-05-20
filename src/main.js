// // Create variables targetting the relevant DOM elements here 👇
var randomTitle = document.querySelector(".cover-title");
var randomImage = document.querySelector(".cover-image");
var randomTagline1 = document.querySelector(".tagline-1");
var randomTagline2 = document.querySelector(".tagline-2");

var newRandomButton = document.querySelector(".random-cover-button");
var newSaveButton = document.querySelector(".save-cover-button");
var newViewButton = document.querySelector(".view-saved-button");
var newMakeButton = document.querySelector(".make-new-button");


// // We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunrises", "stabs")
];
var currentCover;

// var viewForm = document.createElement('.view form-view hidden');
// Add your event listeners here 👇
newRandomButton.addEventListener('click', clickRandomButton);
newMakeButton.addEventListener('click', clickMakeButton);

function clickRandomButton() {
  randomTitle.innerText = changeCover(titles);
  randomImage.src = changeCover(covers);
  randomTagline1.innerText = changeCover(descriptors);
  randomTagline2.innerText = changeCover(descriptors);
};

// function clickMakeButton(e) {
//   e.preventDefault();
//   viewForm.classList.toggle('visible');
// };

// Create your event handlers and other functions here 👇
function changeCover(arrays) {
  var titleNumber = getRandomIndex(arrays);
  var titleName = arrays[titleNumber];
  return titleName
}

// We've provided one function to get you started
function getRandomIndex(banana) {
  return Math.floor(Math.random() * banana.length);
};
