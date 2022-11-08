let firstCard = 10
let secondCard = 5
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBackjack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("tst")
let sumEl = document.getElementById("sumEl")
let cardsEl = document.getElementById("cardsEl")


function startGame(){
    renderGame()
}

function renderGame() {  
    sumEl.textContent = ("Sum: " + sum)
 
   
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

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
    let ncard = 2
    sum += ncard
    cards.push(ncard)
    renderGame()
}
