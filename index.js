let sum=0 
hasBlackJack=false
isAlive=false
let cards=[]
let message=" "
let per={
    name:"per",
    coins:"249$"
}

let messageEl=document.getElementById("message-el")
let cardEl=document.getElementById("card-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let outEl=document.getElementById("out-el")
let playerEl=document.getElementById("player-el")
console.log("sumEl")

function getRandomCard(){
 
    let randomNumber=( Math.floor((Math.random()*13)+1)) //random() generates a no bn 0 and 1. Multiplying by 13 scales it to 0–12.999...
// Adding 1 shifts the range to 1–13.999...

    if (randomNumber==1){
        return 11
    }else if ( randomNumber>10){
        return 10
    }else{
        return randomNumber
    }
}

function startGame(){

     isAlive=true
     outEl.textContent=""
     hasBlackJack=false
     playerEl.textContent=per.name + ":"+ per.coins

    for( let i=cards.length; i>=0; i--)
    {
      cards.pop()
    }

   
    let card1=getRandomCard()
    cards.push(card1)
    let card2=getRandomCard()
    cards.push(card2)
    
    sum=card1+card2
    console.log(sum)
    renderGame()
   
}

function newCard() 
{
    if(isAlive===true && hasBlackJack===false)
    {
    let nextCard=getRandomCard()
    console.log("drawing a new card from deck")
    cards.push(nextCard)
    console.log(cards)
    sum += nextCard
    renderGame()
    } else if (!isAlive) {
        outEl.textContent="Sorry!! you are out of the game"

    }
    else if (hasBlackJack) {
        outEl.textContent="you already got BlackJack"

    }else{
          outEl.textContent="you cant drew a new"
    }

}



function renderGame(){

    cardEl.textContent ="Cards:" 
 
    for( let i=0; i<cards.length; i++)
    {
       cardEl.textContent += cards[i] + ","
    }

   sumEl.textContent = "Sum:" + sum

   if(sum < 21) {
   message="Do you want to draw a card? 🙂"
   

   } else if (sum === 21) {
     message="wohoo!  you've got Blackjack! 🤩 🥳 "
     hasBlackJack=true
     
   } else  {
    message="you're out of the game😞"
    isAlive=false

     }
    messageEl.textContent=message 
     }





