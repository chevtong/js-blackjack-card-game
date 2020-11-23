

//random function
let card;
function randomCard(){

    card = Math.floor((Math.random()* 11) + 1);
    return card; 

}


//start button => give card
let playerCard = [];
document.querySelector(".start").addEventListener("click", function(){

    playerCard = [randomCard()];

    console.log("player's card = " + playerCard);
    console.log(typeof playerCard);

   
    cardDisplay(0);

});

//display the card by create new li 
function cardDisplay(index){

    let List = document.querySelector(".player-card");

    let cardDisplay = document.createElement("li");

    cardDisplay.textContent = playerCard[index];

    List.appendChild(cardDisplay);

    
};


// request a new card
document.querySelector(".hit").addEventListener("click", function(){


    playerCard.push(randomCard());

    console.log("pressed hit btn, player's cards = "+ playerCard);

    cardDisplay(1);
});


//win condition
document.querySelector(".stand").addEventListener("click", function(){

    let playerValue = playerCard.reduce(function(a,b){
        return a + b;} , 0);

    
    
    let result = document.querySelector(".result");

    if (playerValue === 21){

        result.textContent = "you win";

    } else if (playerValue > 21){

        result.textContent = "Bust";

    } else {

        result.textContent = "You lose";
    }


});



