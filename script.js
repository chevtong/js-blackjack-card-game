

let startBtn = document.querySelector(".startgame").addEventListener("click", getCards);

let randomNum;

function randomCard(){
    randomNum = Math.floor((Math.random() * 11) +1 ); 
    return randomNum;
}


let playercards = [];
let dealercards = [];

function getCards(){
    
    dealercards = [randomCard(),randomCard()];
    playercards = [randomCard(),randomCard()];

    console.log("dealer hand = "+ dealercards);
    console.log("player hand = "+ playercards);

    // dealerCardImg();
    // dealerCardImg();

     playerCardImg()
 
}


function playerCardImg(){ 
    
    let playerCard = document.querySelector(".playercardpic");

    console.log(playercards);

    for (let i=0 ; i < Array.length; i++ ){

        let playerCardImg = document.createElement("img");

        playerCardImg.src = "img/" +playercards[i] + ".jpg";
       
        playerCard.appendChild(playerCardImg);

        }  

    
}





// function dealerCardImg(){
//     let cardImg = document.createElement("img");
//     let dealerCard = document.querySelector(".dealercardpic");

//     cardImg.src = "img/cardback.jpg";

//     dealerCard.appendChild(cardImg);

// }




//give card only to player

document.querySelector(".hit").addEventListener("click", function(){

    // TODO give a card to the player 
    playercards.push(randomCard()); 

    console.log("player hand = " + playercards);

    // put the correct image 

    // let thirdCardImage = document.createElement("img"); 
    // let playerCard = document.querySelector(".playercardpic");

    // thirdCardImage.src = "img/" + playercards[2] + ".jpg";
    // playerCard.appendChild(thirdCardImage);

 
    let playerCard = document.querySelector(".playercardpic");
    let playerCardImg;
    
    console.log(playercards);

    for (let i=0 ; i < playercards.length; i++ ){

        playerCardImg = document.createElement("img");

        playerCardImg.src = "img/" +playercards[i] + ".jpg";
       
        playerCard.appendChild(playerCardImg);
    }
})
         



