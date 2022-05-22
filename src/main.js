// // Create variables targetting the relevant DOM elements here 👇
var randomTitle = document.querySelector(".cover-title");
var randomImage = document.querySelector(".cover-image");
var randomTagline1 = document.querySelector(".tagline-1");
var randomTagline2 = document.querySelector(".tagline-2");
var mainCover = document.querySelector(".main-cover");
var savedCoverView = document.querySelector(".saved-view");

var newRandomButton = document.querySelector(".random-cover-button");
var newSaveButton = document.querySelector(".save-cover-button");
var newViewButton = document.querySelector(".view-saved-button");
var newMakeButton = document.querySelector(".make-new-button");
var homeButton = document.querySelector(".home-button");
var makeMyBookButton = document.querySelector(".create-new-book-button");

var viewForm = document.querySelector(".form-view");
var userCover = document.querySelector(".user-cover");
var userTitle = document.querySelector(".user-title");
var userDesc1 = document.querySelector(".user-desc1");
var userDesc2 = document.querySelector(".user-desc2");

// var cover = userCover.value
// var title = userTitle.value;
// var desc1 = userDesc1.value;
// var desc2 = userDesc2.value;
// // We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunrises", "stabs")
];
var currentCover = new Cover(cover, title, desc1, desc2);


// var viewForm = document.createElement('.view form-view hidden');
// Add your event listeners here 👇
newRandomButton.addEventListener('click', clickRandomButton);
newMakeButton.addEventListener('click', clickMakeButton);
newViewButton.addEventListener('click', clickSavedCoversButton);
homeButton.addEventListener('click', clickHomeButton);
makeMyBookButton.addEventListener('click', makeCover);
newSaveButton.addEventListener('click', saveCover);


function clickRandomButton() {
  randomTitle.innerText = changeCover(titles);
  randomImage.src = changeCover(covers);
  randomTagline1.innerText = changeCover(descriptors);
  randomTagline2.innerText = changeCover(descriptors);
};

function clickMakeButton(event) {
  event.preventDefault();
  viewForm.classList.remove('hidden');
  mainCover.classList.add('hidden');
  newRandomButton.classList.add('hidden');
  newMakeButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  newSaveButton.classList.remove('hidden');
  newViewButton.classList.remove('hidden');
};

function clickSavedCoversButton(event) {
  event.preventDefault();
  savedCoverView.classList.remove('hidden');
  mainCover.classList.add('hidden');
  newRandomButton.classList.add('hidden');
  newSaveButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  newViewButton.classList.add('hidden');
  newMakeButton.classList.add('hidden');

  var cover = covers[covers.length -1];
  randomImage.src = cover;
  var title = titles[titles.length -1];
  randomTitle.innerText = title;
  var desc1 = descriptors[descriptors.length -2];
  randomTagline1.innerText = desc1;
  var desc2 = descriptors[descriptors.length -1];
  randomTagline2.innerText = desc2;
  viewForm.classList.add('hidden');
  mainCover.classList.remove('hidden');
  // viewsaved cover takes us to an empty page.
  // appent the html file to include the cover image
  // needs to generate a new cover with information from the saved cover
  // by pulling the last strings from the arrays
};

function clickHomeButton(event) {
  event.preventDefault();
  savedCoverView.classList.add('hidden');
  viewForm.classList.add('hidden');
  newRandomButton.classList.remove('hidden');
  newViewButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  mainCover.classList.remove('hidden');
  newMakeButton.classList.remove('hidden');
  newSaveButton.classList.remove('hidden');
}



function makeCover(event) {
  event.preventDefault();
  var cover = userCover.value
  randomImage.src = cover;
  var title = userTitle.value;
  randomTitle.innerText = title;
  var desc1 = userDesc1.value;
  randomTagline1.innerText = desc1;
  var desc2 = userDesc2.value;
  randomTagline2.innerText = desc2;
  viewForm.classList.add('hidden');
  mainCover.classList.remove('hidden');
  covers.push(cover);
  titles.push(title);
  descriptors.push(desc1, desc2);
}

function saveCover(event) {
  event.preventDefault();
  var cover = userCover.value
  var title = userTitle.value;
  var desc1 = userDesc1.value;
  var desc2 = userDesc2.value;
  if (covers.includes(cover) === false) {
    covers.push(cover)
  }
  if (titles.includes(title) === false) {
    titles.push(title)
  }
  if(descriptors.includes(desc1, desc2) === false) {
    descriptors.push(desc1, desc2)
  }
  console.log(covers, titles, descriptors);
};
// if (array.includes(value) === false) array.push(value);
// Create your event handlers and other functions here 👇
function changeCover(arrays) {
  var titleNumber = getRandomIndex(arrays);
  var titleName = arrays[titleNumber];
  return titleName
}

// We've provided one function to get you started
function getRandomIndex(arrays) {
  return Math.floor(Math.random() * arrays.length);
}
/*
functions to fill out each field
cover form asking for link to image
event listener on make my book Button
function that is invoked by the event listener should:
-title input - pushing strings into existing array
-descriptor input (1 and 2) - pushing strings into array
-
*/
