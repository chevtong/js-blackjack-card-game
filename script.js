//TODO 
//set if user/player get over 22/ backjack, end game
// set if computer smaller than 15, will take another card 

let result;

let pCard1;
let pCard2;
let pCard3;
let pCard4;

let cCard1;
let cCard2;
let cCard3;
let cCard4;

//Give out random card
function getAcard() {
    
 let card = (Math.floor(Math.random() * 10) + 1) 
   
 return card; 
    
};


//check is computer blackjack/ >21

// function cStopTakeCard() {
//     if (sumCompCard == 21 ){

//         alert ("Computer BlackJack");
       

//     } else if (sumCompCard > 21) {

//         alert ("Computer lose");
       

//     } else{
//         console.log("Computer is smaller than 21.");
//     }

// }



//compare card
function compareCard(){ 

    if (sumCompCard == sumPlayerCard){
        result = "It's a tie !";
    } else if (sumPlayerCard < sumCompCard) {
        result = "You lose...";
    } else {
        result = "You WIN!";
    }
};

let btnStart = document.querySelector(".pickcard");
let btnSecondCard = document.querySelector(".anothercard");
let btnThirdCard = document.querySelector(".thirdcard");
let btnForthCard = document.querySelector(".forthcard");

//Pick 1st card
document.querySelector(".pickcard").addEventListener("click",function(){

    
    pCard1 = getAcard();
   

    cCard1 = getAcard();
   

    console.log("playercard1 : " + pCard1);
    console.log("computercard1 : " + cCard1);


    document.querySelector(".card1").innerHTML = pCard1;


    
    btnStart.style.display = "none";
    btnSecondCard.style.display = "block";

});

//Pick 2nd Card
document.querySelector(".btn-anothercard-yes").addEventListener("click", function(){

    pCard2 = getAcard();
    cCard2 = getAcard();


    


    console.log(`playercard1: ${pCard1},  playercard2: ${pCard2} = ${pCard1 + pCard2} `);
    console.log(`computercard1 : ${cCard1} , compcard2: ${cCard2} = ${cCard1 + cCard2}`);

    document.querySelector(".card2").innerHTML = pCard2;

   
    // cStopTakeCard();

    btnSecondCard.style.display = "none";
    btnThirdCard.style.display = "block";


});

//Pick 3th card
document.querySelector(".btn-thirdcard-yes").addEventListener("click", function(){
 
    pCard3 = getAcard();
    cCard3 = getAcard();

    console.log(`playercard1: ${pCard1}, playercard2: ${pCard2}, playercard3: ${pCard3} = ${pCard1 + pCard2 + pCard3} `);
    console.log(`computercard1 : ${cCard1} , compcard2: ${cCard2} , compCard3 : ${cCard3} = ${cCard1 + cCard2 + cCard3}`);

    document.querySelector(".card3").innerHTML = pCard3;

    //check is computer has black jack/ > 21
    // cStopTakeCard();
 
   
    btnThirdCard.style.display = "none";
    btnForthCard.style.display = "block";

});

//Pick 4th card
document.querySelector(".btn-forthcard-yes").addEventListener("click", function(){
 
    pCard4 = getAcard();
    cCard4 = getAcard();

    console.log(`playercard1: ${pCard1}, playercard2: ${pCard2}, playercard3: ${pCard3}, playcard4 : ${pCard4}= ${pCard1 + pCard2 + pCard3 + pCard4} `);
    console.log(`computercard1 : ${cCard1} , compcard2: ${cCard2} , compCard3 : ${cCard3}, compCard4: ${cCard4} = ${cCard1 + cCard2 + cCard3 + cCard4}`);

    document.querySelector(".card4").innerHTML = pCard4;

    //check is computer has black jack/ > 21
    // cStopTakeCard();
 

});



//User quit after 1st card
document.querySelector(".btn-anothercard-no").addEventListener("click", function(){

    
    sumPlayerCard = pCard1;
    sumCompCard = cCard1;
    compareCard();


    console.log("sum of player card:" + sumPlayerCard);
    console.log(result);

});




// user quit after 2nd card
document.querySelector(".btn-thirdcard-no").addEventListener("click", function(){

    
    sumPlayerCard = pCard1 + pCard2;
    sumCompCard = cCard1 + cCard2;
    compareCard();

    console.log("sum of player card:" + sumPlayerCard);
    console.log(result);

    
   

});

// user quit after 3th card
document.querySelector(".btn-forthcard-no").addEventListener("click", function(){

    
    sumPlayerCard = pCard1 + pCard2 +pCard3;
    sumCompCard = cCard1 + cCard2 +cCard3;
    compareCard();

    console.log("sum of player card:" + sumPlayerCard);
    console.log(result);

    
   

});


