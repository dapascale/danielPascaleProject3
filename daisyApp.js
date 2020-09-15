// Create a namespacing object for the App
const daisyApp = {};
let count = 0;
let oneFlip = '';
let twoFlip = '';
let oneFlipID = '';
let twoFlipID = '';
let firstClick = null

// create an array to store the cards
const cardDeck = [
    {
        name: 'Fox',
        imagePath: './assets/cardFox.jpg',
        altText: 'Cast member Fox from Daisy of Love',
        id: 'fox',
        value: 1,
    },
    {
        name: 'Weasel',
        imagePath: './assets/cardWeasel.jpg',
        altText: 'Cast member Weasel from Daisy of Love',
        id: 'weasel',
        value: 2,
    },
    {
        name: 'Torch',
        imagePath: './assets/cardTorch.jpg',
        altText: 'Cast member Torch from Daisy of Love',
        id: 'torch',
        value: 3,
    },
    {
        name: 'Big Rig',
        imagePath: './assets/cardBigRig.jpg',
        altText: 'Cast member Big Rig from Daisy of Love',
        id: 'bigRig',
        value: 4,
    },
]

// duplicate the cards
let allCards = cardDeck.concat(cardDeck);
// randomize the Deck
// NOTE*** that I found the below randomizer code on Stack Overflow
allCards = allCards.sort(() => 0.5 - Math.random());

daisyApp.reset = function(){
    count = 0;
    oneFlip = '';
    oneFlipID = '';
    twoFlip = '';
    twoFlipID = '';
}

daisyApp.resetCards = function () {
    setTimeout( function() {
        $('img').removeClass('show');
    }, 500) 
}

// display the cards on the game board in a random order
daisyApp.setGameArea = function(){
    // create a gameCard area
    $('#cardGame').append($(`<div>`).addClass('cardDeck'))
    // loop through array and grab image and alt text
    allCards.forEach((hunk) => {
        // create a <img> for each item in deck array
        const cardImage = $('<img>').addClass('card').attr('src', hunk.imagePath).attr('alt', hunk.altText).attr('id', hunk.id)
        // append a <div> with picture and alt text to the game are
        $('.cardDeck').append(cardImage);
    })
    daisyApp.gameplay();
}

daisyApp.gameplay = function(){
    // add event listen for click
    $('.card').on('click', function(){
        // only add class of show for up to two cards
        // TODO disable same card from being clicked twice
        if (count < 2) {
            count++;
            $(this).addClass('show');
            // on first guess, assign the flipNumber, etc
            if (count === 1) {
                oneFlip = $(this);
                oneFlipID = $(this).attr('id');
            } else {
                if (count === 2) {
                    twoFlip = $(this)
                    twoFlipID = $(this).attr('id');
                }
            }
            if (oneFlipID === twoFlipID) {
                $(oneFlip).addClass('match');
                $(twoFlip).addClass('match');
            }
            if (count === 2) {
                daisyApp.reset();
                daisyApp.resetCards();
            }
        }
    })
}

daisyApp.init = function(){
    daisyApp.setGameArea();
}

// Ready the doc
$(function () {
    daisyApp.init();
});




// Create a way for cards placement to be randomized
// Creat an event listener for the click on a card
// If two cards match, they appear in sidebar
// Else, flip cards back to face-down
