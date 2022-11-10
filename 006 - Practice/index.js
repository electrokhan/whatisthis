let hands =["Apple", "Mango", "Apple"]
let appleShelf = document.getElementById("ashelf")
let mangoShelf = document.getElementById("mshelf")

function sortFruit(){
    for(let i =0; i< hands.length; i++){
        if (hands[i] ===  "Apple"){
            appleShelf.textContent += hands[i] + " "
        } else if(hands[i] === "Mango"){
            mangoShelf.textContent += hands[i]+ " "
        }

    }
}
 sortFruit()