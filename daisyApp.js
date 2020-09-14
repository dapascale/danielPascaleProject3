// Create a namespacing object for the App
const daisyApp = {};

// create an array to store the cards
const cardDeck = [
    {
        name: 'Fox',
        imagePath: './assets/cardFox.jpg',
        altText: 'Cast member Fox from Daisy of Love',
        id: 1,
        value: 1,
    },
    {
        name: 'Weasel',
        imagePath: './assets/cardWeasel.jpg',
        altText: 'Cast member Weasel from Daisy of Love',
        id: 2,
        value: 2,
    },
    {
        name: 'Torch',
        imagePath: './assets/cardTorch.jpg',
        altText: 'Cast member Torch from Daisy of Love',
        id: 3,
        value: 3,
    },
    {
        name: 'Big Rig',
        imagePath: './assets/cardBigRig.jpg',
        altText: 'Cast member Big Rig from Daisy of Love',
        id: 4,
        value: 4,
    },
]

// duplicate the cards
const allCards = cardDeck.concat(cardDeck);

// display the cards on the game board in a random order
daisyApp.setGameArea = function(){
    // create a gameCard area
    $('#cardGame').append($(`<div>`).addClass('cardDeck'))
    // loop through array 
    allCards.forEach((hunk) => {
        // create a <div> for each item in deck array
        const picture = hunk.imagePath;
        const altText = hunk.altText;
        // append an <li> with picture and alt text to the ul
        $('.cardDeck').append($(`<div>`).addClass('card'));
        $('.card').css('background-image', `url(${picture})`).css('background-size', 'cover').attr('alt', `${altText}`);
    })
}


// randomize the cards on the board


daisyApp.init = function(){
    console.log(`we're back!`);
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
