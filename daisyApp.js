const daisyApp = {};



daisyApp.init = function(){
    console.log(`we're back!`);
}

$(function(){
    daisyApp.init();
});


// Ready the doc
// Create a namespacing object for the App
// Create an app initialize function
// Create an array for the deck of cards
// Create a way for cards placement to be randomized
// Creat an event listener for the click on a card
// If two cards match, they appear in sidebar
// Else, flip cards back to face-down
