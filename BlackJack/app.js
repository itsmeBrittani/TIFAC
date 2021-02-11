$(() => {
console.log("you got it dude!")

let $deck = [];

let $playerHand = [];
let $houseHand = [];

let $playerTotal = [];
let $houseTotal = [];

// click event listener for Deal
const $dealBtn = $('#deal')
$dealBtn.on('click', () =>{
    let $deck = [];
    let $playerHand = [];
    let $houseHand = [];
    let $playerTotal = [];
    let $houseTotal = [];
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=4').then(function(response) {
        if (response.status != 200) {
            alert("Nope");
        return;
      }
    response.json().then(function($data) {
        let $api = $data;
        let $deckID = $api.deck_id;
        let $firstDeal = $data.cards;
        for (var i = 0; i < firstDeal.length; i++){
            if(firstDeal[i].value == "KING" || firstDeal[i].value == "QUEEN" || firstDeal[i].value == "JACK"){
              firstDeal[i].value = 10;
            }
            if(firstDeal[i].value == "ACE"){
              firstDeal[i].value = 11;
            }
            if(firstDeal[i].value != "KING" && firstDeal[i].value != "QUEEN" && firstDeal[i].value != "JACK" && firstDeal[i].value != "ACE"){
              firstDeal[i].value = parseInt(firstDeal[i].value);
            }
            }
        console.log($firstDeal)
    });
    });
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


// //checks if any Aces are in hand
// const aceCheck = () =>{
//     if ($playerTotal > 21 && $playerHand.contains($deck[48] || $deck[49] || $deck[50] || $deck[51])){
//         $deck[48].point = 1;
//         $deck[49].point = 1;
//         $deck[50].point = 1;
//         $deck[51].point = 1;
//     } 
//     bustCheck()
// }

// const bustCheck = () => {
//     aceCheck()
//     if($playerTotal > 21){
//         alert("Player busted! House wins!");
//         $playerTotal = 0;
//         $houseTotal = 0;
//         $playerHand = [];
//         $houseHand = [];
//     }else if($houseTotal > 21){
//         alert("House busted! Player wins!")
//         $playerTotal = 0;
//         $houseTotal = 0;
//         $playerHand = [];
//         $houseHand = [];
//     }
// }





});



