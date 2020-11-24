// >TODO : The dealer wins in the event of a draw
// If the player stops, the dealer gets as many turns as needed to either win or go bust
// Add a basic casino style theme to the page

//random function
let card = [1, 2,3,4,5,6,7,8,9,10];
let random;


    function randomCard(){

        random = Math.floor((Math.random() * card.length) + 1);
        return random;

    };


//start button => give card
let playerCard = [];
let dealerCard = [];
document.querySelector(".start").addEventListener("click", function(){

    playerCard = [randomCard()];
    dealerCard = [randomCard()];

   
    cardDisplayPlayer(0);
    cardDisplayDealer(0);

});

//display the player card by create new li 
function cardDisplayPlayer(index){

    let ListPlayer = document.querySelector(".player-card");
    
    let cardDisplayPlayer = document.createElement("li");

    cardDisplayPlayer.textContent = playerCard[index];

    ListPlayer.appendChild(cardDisplayPlayer);

};
//display the dealer card by create new li 
function cardDisplayDealer(index){

    let ListDealer = document.querySelector(".dealer-card");

    let cardDisplayDealer = document.createElement("li");

    cardDisplayDealer.textContent = dealerCard[index];

    ListDealer.appendChild(cardDisplayDealer);

};


// request a new card
document.querySelector(".hit").addEventListener("click", function(){


    playerCard.push(randomCard());
   
    cardDisplayPlayer(1);

    //if dealer hand is smaller than player's, assign one card to dealer
 
    if (dealerTotalValue() < playerTotalValue()) {
        
        dealerCard.push(randomCard());
        cardDisplayDealer(1);
        dealerTotalValue();

    }

    console.log("dealer cards:"+ dealerCard);
    console.log("dealer total value: "+ dealerValue);
    
    console.log("player cards:"+ playerCard);
    console.log("player total value: " + playerValue);



    
});


//calculate the player total value 
let playerValue = 0;
function playerTotalValue(){
   
    let i; 

    for ( i = 0; i < playerCard.length; i++) {
        playerValue += playerCard[i]; 
    } return playerValue; 

    
}

//calculate the dealer total value 
let dealerValue = 0;
function dealerTotalValue(){
   
    let i; 

    for ( i = 0; i < dealerCard.length; i++) {
        dealerValue += dealerCard[i]; 
    } return dealerValue; 

    
}



//win condition
document.querySelector(".stand").addEventListener("click", function(){



   



 
    playerTotalValue();
    dealerTotalValue();

    
    console.log("dealer cards: " +dealerCard);
    console.log("dealer total value = " +dealerValue);

    console.log("player cards: " + playerCard);
    console.log("player total value = " +playerValue);


    let result = document.querySelector(".result");

    if  (playerValue == 21){

        result.textContent = "you win";

    } else if (playerValue > 21){

        result.textContent = "Bust";

    } else if (playerValue == dealerValue){

        result.textContent = "You lose";
    } else {

        result.textContent = "You lose";
    }
    console.log(playerValue);


});



