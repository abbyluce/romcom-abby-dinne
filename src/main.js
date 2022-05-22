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

var savedCoverSection = document.querySelector(".saved-covers-section");


var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunrises", "stabs")
];
var currentCover;

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
    savedCoverView.classList.add('hidden');
};

function clickSavedCoversButton(event) {
  event.preventDefault();

    savedCoverView.classList.remove('hidden');
    mainCover.classList.add('hidden');
    newRandomButton.classList.add('hidden');
    newSaveButton.classList.add('hidden');
    homeButton.classList.remove('hidden');
    newViewButton.classList.remove('hidden');
    newMakeButton.classList.remove('hidden');
    viewForm.classList.add('hidden');

      var cover = covers[covers.length -1];
        randomImage.src = cover;
      var title = titles[titles.length -1];
        randomTitle.innerText = title;
      var desc1 = descriptors[descriptors.length -2];
        randomTagline1.innerText = desc1;
      var desc2 = descriptors[descriptors.length -1];
        randomTagline2.innerText = desc2;

    viewForm.classList.add('hidden');

  var savedCoverSection = document.querySelector(".saved-covers-section");

  savedCovers.forEach(function(book) {
      savedCoverSection.innerHTML +=
        `<section class='mini-cover'>
        <img class="cover-image" src=${book.cover}>
        <h2 class="cover-title">${book.title}</h2>
        <h3 class="tagline">A tale of
        <span class="tagline-1">${book.tagline1}</span> and
        <span class="tagline-2">${book.tagline2}</span></h3></section>`
    })
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
};

function makeCover(event) {
  event.preventDefault();

      var cover = userCover.value;
        randomImage.src = cover;
      var title = userTitle.value;
        randomTitle.innerText = title;
      var desc1 = userDesc1.value;
        randomTagline1.innerText = desc1;
      var desc2 = userDesc2.value;
        randomTagline2.innerText = desc2;

    viewForm.classList.add('hidden');
    mainCover.classList.remove('hidden');
    savedCoverView.classList.add('hidden');

  var newSavedCover = new Cover(cover, title, desc1, desc2)
if (savedCovers.includes(newSavedCover) === false) {
    savedCovers.push(newSavedCover);
  }
};

function changeCover(arrays) {
  var titleNumber = getRandomIndex(arrays);
  var titleName = arrays[titleNumber];
  return titleName
};

function saveCover(event) {
  event.preventDefault();

      var cover = userCover.value;
      var title = userTitle.value;
      var desc1 = userDesc1.value;
      var desc2 = userDesc2.value;
        if (covers.includes(cover) === false) {
          covers.push(cover);
        }
        if (titles.includes(title) === false) {
          titles.push(title);
        }
        if (descriptors.includes(desc1, desc2) === false) {
          descriptors.push(desc1, desc2);
        }
};

function getRandomIndex(arrays) {
  return Math.floor(Math.random() * arrays.length);
};
