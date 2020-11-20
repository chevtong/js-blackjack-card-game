let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function randomCard(deck){

    let randomNum = Math.floor(Math.random() * deck.length); 
    return deck[randomNum];
}

let playerHand;
let dealerHand; 

//start game
document.querySelector(".start").addEventListener("click", function(){


    playerHand = [randomCard(deck), randomCard(deck)];
    
    dealerHand = [randomCard(deck), randomCard(deck)];

    displayValue();



});


//display card values on screen
function displayValue(){
    document.querySelector(".playerhand").innerHTML = playerHand ;
    document.querySelector(".dealerhand").innerHTML = dealerHand;

    document.querySelector(".dealer-hand-value").innerHTML = "total: " + totalValue(dealerHand);
    document.querySelector(".player-hand-value").innerHTML = "total: " + totalValue(playerHand);

    
};


//check total value on hand
function totalValue(hand){

    let i;
    let sum = 0;
   
        for (i = 0; i < hand.length; i++) {
             sum  += hand[i];
        } 
        return sum;
    
}

//check for black jack

function blackJack(){
    if (totalValue(playerHand) > 21){
       
        document.querySelector(".result").innerHTML = ("bust");
        
    } 
};


//Get more card
document.querySelector(".hit").addEventListener("click", function(){

  playerHand.push(randomCard(deck));
  dealerHand.push(randomCard(deck));

    blackJack();
    displayValue();

});

// Stand button
document.querySelector(".stand").addEventListener("click", function(){

 

    if (totalValue(playerHand) = totalValue(dealerHand)){

        console.log("A tie");

    } else if 
    (totalValue(playerHand) > totalValue(dealerHand)){

        console.log("Win");

    } else if(totalValue(dealerHand) > 21){

        console.log("Win");

    } else{

        console.log("lose");
    }



});






