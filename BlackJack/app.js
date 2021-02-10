$(() => {
console.log("you got it dude!")

// create deck 

let $suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
let $value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let $deck = [];

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

let $playerHand = [];
let $houseHand = [];

let $playerTotal = 0;
let $houseTotal = 0;

//checks if any Aces are in hand
const aceCheck = () =>{
    if ($playerTotal > 21 && $playerHand.contains($deck[48] || $deck[49] || $deck[50] || $deck[51])){
        $deck[48].point = 1;
        $deck[49].point = 1;
        $deck[50].point = 1;
        $deck[51].point = 1;
    } 
    bustCheck()
}

const bustCheck = () => {
    aceCheck()
    if($playerTotal > 21){
        alert("Player busted! House wins!");
    }else if($houseTotal > 21){
        alert("House busted! Player wins!")
    }
}

// click event listener for Deal
const $dealBtn = $('#deal')
$dealBtn.on('click', () => {
    console.log('Button has been clicked')
});

const $hitBtn = $('#hitme')
$hitBtn.on('click', () => {
    console.log('Clicked')
});

const $standBtn = $('#stand')
$standBtn.on('click', () => {
    console.log('Clicked')
});

});