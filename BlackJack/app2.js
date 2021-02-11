// create deck 

let $suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
let $value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let $deck = [];

let $playerHand = [];
let $houseHand = [];

let $playerTotal = [];
let $houseTotal = [];


for(i = 0; i <$value.length; i++){
   for(w = 0; w < $suits.length; w++){
       let $point = parseInt($value[i]);
       if(($value[i]) == 'J' || $value[i] == 'Q' || $value[i] == 'K')
       $point = 10;
       if(($value[i]) == 'A')
       $point = 11;
   const $card = {Value: $value[i], Suit: $suits[w], Point: $point};
   $deck.push($card);
   }
}

console.log($deck)
console.log($deck[5])