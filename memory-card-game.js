const cards = document.querySelectorAll(".card");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
resetGame();

const welcomeScreen = document.querySelector(".welcome")
console.log(`Welcome to the Horror Memory Game! Please enter you name players.`)
let player1 = prompt("Player 1")
let player2 = prompt("Player 2")
let player1Time, player2Time

if(player1 != "" && player2 != ""){
    document.querySelector(".player1").innerHTML = player1
    document.querySelector(".player2").innerHTML = player2
}

//win state 
//whoever has the quickest time wins
const startingTime = 2
let time = startingTime * 60


const timerEl = document.getElementById("timer")
let playersTimer = setInterval(updateTimer, 1000)
function updateTimer(){
    
    const minutes = Math.floor(time/60)
    let seconds = time % 60
   console.log(`${minutes}: ${seconds}`)
    time--

    function game(){
        
    }
    if(matched == 7){
        player1Time = time
     clearTimeout(playersTimer)
    
    console.log(`You completed the game in ${time}. Your time is ${time} seconds`)
}   else if (time === -1){
    clearTimeout(playersTimer)
    player1Time = 0
    console.log("Times up. It is Player 2 turn")
}

if(matched == 7){
    player2Time = time
 clearTimeout(playersTimer)

console.log(`You completed the game in ${time}. Your time is ${time} seconds`)

}   else if (time === -1){
clearTimeout(playersTimer)
player2Time = 0
console.log("Times up. It is Player 1 turn")
}
}  
//win or lose
 if (player1Time < player2Time){
    console.log(`Congratulations ${player1}! You win`)
 }else if(player1Time < player2Time){
    console.log(`Congratulations ${player2}! You win`)

 }
  
function resetGame(){
    
}



// const start = document.getElementById("start")
// start.addEventListener("click",evt => {

//flipping the card
    function flipCard({target: clickedCard}) {
        if(cardOne !== clickedCard && !disableDeck) {
            clickedCard.classList.add("flip");
            if(!cardOne) {
                return cardOne = clickedCard;
            }
            cardTwo = clickedCard;
            disableDeck = true;
            let cardOneImg = cardOne.querySelector(".back-view img").src,
            cardTwoImg = cardTwo.querySelector(".back-view img").src;
            matchCards(cardOneImg, cardTwoImg);
        }
    }
    function matchCards(img1, img2) {
        if(img1 === img2) {
            matched++;
            if(matched == 7) {
                setTimeout(() => {
                    return shuffleCard();
                }, 1000);
            }
            cardOne.removeEventListener("click", flipCard);
            cardTwo.removeEventListener("click", flipCard);
            cardOne = cardTwo = "";
            return disableDeck = false;
        }
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);
        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1200);
    }

  
    function shuffleCard() {
        matched = 0;
        disableDeck = false;
        cardOne = cardTwo = "";
        let arr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];
        arr.sort(() => Math.random() > 0.5 ? 1 : -1);
        cards.forEach((card, i) => {
            card.classList.remove("flip");
            let imgTag = card.querySelector(".back-view img");
            imgTag.src = `pictures/${arr[i]}.jpg`;
            card.addEventListener("click", flipCard);
        });
    }
    shuffleCard();
        
    cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });
// })