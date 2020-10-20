// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById('sidebar');
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById('info');
const mainpic = document.getElementById('mainpic');
const blue = window.matchMedia("(max-width: 800px)");
const tigeypic = document.getElementById('tigeypic');
const flash = document.getElementById('flash');

//Add Bugs
function flashAlert(){
  flash.classList.add('bugvisible');

}

function bugify(){
  setTimeout(flashAlert, 4000);
  const bugbuzz = new Audio('sounds/bugbuzz.mp3');
  bugbuzz.loop = true;
  bugbuzz.play();
  new BugController({'minBugs':10, 'maxBugs':15, 'mouseOver':'die'});
  new SpiderController({'minBugs':3, 'maxBugs':6, 'mouseOver':'die'});

}

//Kill All Bugs
function bugsGo(){
  window.location.reload();
}

//Make Tigey Roar
function roarer(){
  mainpic.innerHTML = '<img src="img/tiger1.png" id="tigeypic" alt="decorative">';
  tigeypic.classList.remove('rightmove');
}

function changetiger(){
    const roaring = new Audio('sounds/roary.mp3')
    roaring.play();
    mainpic.innerHTML = '<img src="img/tiger2.png" id="tigeypic" alt="decorative">' 
    tigeypic.classList.add('rightmove');
    setTimeout(roarer, 2000);
}

// Show and hide about info
function show(){info.classList.toggle('xxc');};
function unshow(){info.classList.remove('xxc');};

//Center the loader wherever the page is
function checkForTop (){loader.style.top = (window.pageYOffset) + "px";}
checkForTop();

//Manage the loader
function stopLoader() {loader.classList.add("stop");}
function startLoader(){loader.classList.remove("stop"); setTimeout(stopLoader, 1000);}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {if (blue.matches) {sidey.classList.remove("block");}}
function toggler() {sidey.classList.toggle("block");}
myFunction(blue);

//GAME FUNCTIONALITY
// There are three different sets of words/images used in the game
const firstSet = document.getElementById("set1");
const secondSet = document.getElementById("set2");
const thirdSet = document.getElementById("set3");

// These are the other DOM elements
const instructions = document.getElementById("instructions");
const gameContainer = document.getElementById("game-tiles");
const sideBar = document.getElementById("sidebar");

// Each image and word in a set array has the same data-framework number, in order to check for pairs.
// The data-name is a string, which can be used in the second case as innerHTML.
const set1 = [
  { number: "1", name: "Ant" },
  { number: "1", name: "<img src = 'img/Ant.svg' alt='Ant' class='image'>" },
  { number: "2", name: "Bear" },
  {
    number: "2",
    name: "<img src = 'img/Bear.svg' alt='Bear' class='image'>",
  },
  { number: "3", name: "Bee" },
  { number: "3", name: "<img src = 'img/Bee.svg' alt='Bee' class='image'>" },
  { number: "4", name: "Bird" },
  {
    number: "4",
    name: "<img src = 'img/Bird.svg' alt='Bird' class='image'>",
  },
  { number: "5", name: "Butterfly" },
  {
    number: "5",
    name: "<img src = 'img/Butterfly.svg' alt='Butterfly' class='image'>",
  },
  { number: "6", name: "Cat" },
  {
    number: "6",
    name: "<img src = 'img/Cat.svg' alt='Cat' class='image'>",
  },
  { number: "7", name: "Caterpillar" },
  {
    number: "7",
    name: "<img src = 'img/Caterpillar.svg' alt='Caterpillar' class='image'>",
  },
  { number: "8", name: "Chicken" },
  {
    number: "8",
    name: "<img src = 'img/Chicken.svg' alt='Chicken' class='image'>",
  },
];
const set2 = [
  { number: "9", name: "Cow" },
  {
    number: "9",
    name: "<img src = 'img/Cow.svg' alt='Cow' class='image'>",
  },
  { number: "10", name: "Crab" },
  {
    number: "10",
    name: "<img src = 'img/Crab.svg' alt='Crab' class='image'>",
  },
  { number: "11", name: "Deer" },
  {
    number: "11",
    name: "<img src = 'img/Deer.svg' alt='Deer' class='image'>",
  },
  { number: "12", name: "Dinosaur" },
  {
    number: "12",
    name: "<img src = 'img/Dinosaur.svg' alt='Dinosaur' class='image'>",
  },
  { number: "13", name: "Dog" },
  {
    number: "13",
    name: "<img src = 'img/Dog.svg' alt='Dog' class='image'>",
  },
  { number: "14", name: "Dolphin" },
  {
    number: "14",
    name: "<img src = 'img/Dolphin.svg' alt='Dolphin' class='image'>",
  },
  { number: "15", name: "Dragonfly" },
  {
    number: "15",
    name: "<img src = 'img/Dragonfly.svg' alt='Dragonfly' class='image'>",
  },
  { number: "16", name: "Duck" },
  {
    number: "16",
    name: "<img src = 'img/Duck.svg' alt='Duck' class='image'>",
  },
];
const set3 = [
  { number: "17", name: "Elephant" },
  {
    number: "17",
    name: "<img src = 'img/Elephant.svg' alt='Elephant' class='image'>",
  },
  { number: "18", name: "Fish" },
  {
    number: "18",
    name: "<img src = 'img/Fish.svg' alt='Fish' class='image'>",
  },
  { number: "19", name: "Frog" },
  {
    number: "19",
    name: "<img src = 'img/Frog.svg' alt='Frog' class='image'>",
  },
  { number: "20", name: "Giraffe" },
  {
    number: "20",
    name: "<img src = 'img/Giraffe.svg' alt='Giraffe' class='image'>",
  },
  { number: "21", name: "Gorilla" },
  {
    number: "21",
    name: "<img src = 'img/Gorilla.svg' alt='Gorilla' class='image'>",
  },
  { number: "22", name: "Horse" },
  {
    number: "22",
    name: "<img src = 'img/Horse.svg' alt='Horse' class='image'>",
  },
  { number: "23", name: "Kangaroo" },
  {
    number: "23",
    name: "<img src = 'img/Kangaroo.svg' alt='Kangaroo' class='image'>",
  },
  { number: "24", name: "Leopard" },
  {
    number: "24",
    name: "<img src = 'img/Leopard.svg' alt='Leopard' class='image'>",
  },
];

// By Default the game plays set1
playGame(set1);

// In the sidebar, different sets can be chosen by clicking
firstSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "ANIMAL MATCH: SET 1";
  playGame(set1);
});

secondSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "ANIMAL MATCH: SET 2";
  playGame(set2);
});

thirdSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "ANIMAL MATCH: SET 3";

  playGame(set3);
});

// PLAY THE GAME
// SHUFFLE THE GAME ARRAY for the chosen SET 1, 2 or 3.
function playGame(array) {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  // call the shuffle function & assign the array to "contents"
  shuffle(array);
  let contents = array;

  // Create 16 Playing cards by using forEach on the array contents.
  contents.forEach((data, index) => createCard(data, index));

  // Call the createCard function turn the cards into DIV elements.
  function createCard(data, index) {
    let card = document.createElement("div");
    // Add a classname so the cards can be styled with CSS
    card.classList.add("card");
    //  Include the data-famework (data.number) of the cards so they can be checked plus the necessary HTML.

    card.innerHTML = `<div class="memory-card" tabindex=0 data-framework="${data.number}"><div class="front-face">${data.name}</div><div class="back-face"><img src = "img/Lion.svg" alt="picture of a basket of food" class="imgBg smaller" id="imgBg"></div></div>`;

    // Append the card divs to the game container so they appear on the page.
    gameContainer.appendChild(card);
  }

  // Select all instances of the class 'memory-card' and assign it to a constant
  const cards = document.querySelectorAll(".memory-card");

  // Set the initial boolean conditions to make the game work
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  // Prevent card flipping, add the 'flip' CSS class to flip the card if it's alright to do so.
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    // Allowing two cards to be flipped and calling the check function
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;

    checkForMatch();
  }

  // The check function
  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }

    unflipCards();
  }

  // Make pairs vanish by killing their innerHTML
  function disableCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.innerHTML = "";
      secondCard.innerHTML = "";
      resetBoard();
    }, 1000);
  }

  // Unflip cards if they don't match by removing the flip class.
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1000);
  }

  // Set the board to continue the game, setting the constants to their original state
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  // Event listener added to the cards
  cards.forEach((card) => card.addEventListener("click", flipCard));


}