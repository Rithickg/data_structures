// Shuffle a deck of card 

const suits = ['Spades','Diamonds','Club','Heart']
const values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']

const deck = []

// create a deck of card 
for(let i =0;i<suits.length; i++){
    for(let x=0; x<values.length; x++){
        let card = { Value : values[x], Suit: suits[i]};
        deck.push(card);
    }
}

console.log(deck)

// shuffle card 
for(let i = deck.length-1; i>0; i--){
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

// display shuffle cards 
for(let i = 0; i<10; i++){
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}