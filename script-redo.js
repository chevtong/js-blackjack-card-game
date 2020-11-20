//set enter page
// document.querySelector(".btn-entergame").addEventListener("click", function(){

//     let enterScreen = document.querySelector(".entergame");

//     enterScreen.style.opacity = "0.9";
//     setTimeout(() =>{ enterScreen.style.opacity = "0.7";}, 200);
//     setTimeout(() =>{ enterScreen.style.opacity = "0.6";}, 300);
//     setTimeout(() =>{ enterScreen.style.opacity = "0.5";}, 400);
//     setTimeout(() =>{ enterScreen.style.opacity = "0.4";}, 500);
//     setTimeout(() =>{ enterScreen.style.opacity = "0.2";}, 600);
//     setTimeout(() =>{ enterScreen.style.opacity = "0.1";}, 700);
//     setTimeout(() =>{ enterScreen.style.opacity = "0";}, 800);
//     setTimeout(() =>{ enterScreen.remove()}, 1000);

// });  






let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let randomNum;
function randomCard(deck){

    randomNum = Math.floor(Math.random() * deck.length); 
    return deck[randomNum];
}





//start game
let startBtn = document.querySelector(".start"); 

startBtn.addEventListener("click", function(){

    
    

    let playerHand;
    let dealerHand; 

    playerHand = [randomCard(deck), randomCard(deck)];
    
    dealerHand = [randomCard(deck), randomCard(deck)];

    displayValue();
    dealerCardImage();
    dealerCardImage();

    startBtn.style.display = "none";




    //player card image
    let pCard1 = playerHand[0]; 
    let pCard2 = playerHand[1]; 

    let image = document.createElement('img');
    image.src = "img/"+ pCard1 + ".jpg";
    document.querySelector(".playercardpic").appendChild(image);

    let image2 = document.createElement('img');
    image2.src = "img/"+ pCard2 + ".jpg";
    document.querySelector(".playercardpic").appendChild(image2);

    //display card values on screen
    function displayValue(){
        document.querySelector(".playerhand").innerHTML = "Your Cards:" + playerHand ;
        document.querySelector(".dealerhand").innerHTML = "Dealer's Cards:" + dealerHand;

        document.querySelector(".dealer-hand-value").innerHTML = "Total: " + totalValue(dealerHand);
        document.querySelector(".player-hand-value").innerHTML = "Total: " + totalValue(playerHand);

    };

    //Add dealer card image
    function dealerCardImage(){
        let img = document.createElement('img');
        img.src = "img/cardback.jpg";
        document.querySelector(".dealercardpic").appendChild(img);

    }

     //Show total value on hand
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
        
            document.querySelector(".bust").innerHTML = ("!BUST!");
            
        } 
    };


    //Get more card
    document.querySelector(".hit").addEventListener("click", function(){

    playerHand.push(randomCard(deck));
    dealerHand.push(randomCard(deck));

        blackJack();
        displayValue();
        dealerCardImage();

        let pCard3 = playerHand[2];
        let image3 = document.createElement('img');
        image3.src = "img/"+ pCard3 + ".jpg";
        document.querySelector(".playercardpic").appendChild(image3);
    });



// Stand button
  
    function compare(){
        if (totalValue(playerHand) = totalValue(dealerHand)){

            x = "A tie";

        } else if 
        (totalValue(playerHand) > totalValue(dealerHand)){

            x ="You Win!";

        } else if(totalValue(dealerHand) > 21){

            x = "You Win!";

        } else{

            x = "You lose...";
        }

    };
});


    







