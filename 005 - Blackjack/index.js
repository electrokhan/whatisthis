let player = {
    name: "eKinhas",
    chips: 521,
    tst: function(){
        console.log("nem fodendo")
    }

}

player.tst()
let cards = []
let sum = 0
let hasBackjack = false
let isAlive = false
let hasBet = true
let message = ""
let messageEl = document.getElementById("tst")
let sumEl = document.getElementById("sumEl")
let cardsEl = document.getElementById("cardsEl")
let playerinfo = document.getElementById("playerinfo")
playerinfo.textContent = player.name + ": $" + player.chips 

function getRandomCard(){
    let card = Math.floor(Math.random()*13) + 1
    if (card === 1){
        return 11
    } else if (card > 11){
        return 10
    }else {
        return card
    }
}

function startGame(){
    if (hasBet === true){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]

    renderGame()
}
}

function renderGame() {  
    cardsEl.textContent = "Cards: "
    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = ("Sum: " + sum)
    if (sum <= 20) {
        message = "Another?"
    } else if (sum === 21){
        message = "VERY NICE!"
        hasBackjack = true
    } else {
        message = "HAHAHAHAHHAHA"
        isAlive = false
    } 
    messageEl.textContent = message
}
function newCard(){
    if (isAlive === true && hasBackjack === false){
    let ncard = getRandomCard()
    sum += ncard
    cards.push(ncard)
    renderGame()
}
}