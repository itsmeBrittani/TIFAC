$(() => {
console.log("you got it dude!")

let $deck = $('<img class="card" id="deckcard">');
$deck.attr('src', "https://i.ibb.co/VMD00H1/card-back-black.png");

$('#deck').append($deck);

let $playerHand = [];
let $houseHand = [];

let $playerTotal = [];
let $houseTotal = [];

// click event listener for Deal
const $dealBtn = $('#deal')
$dealBtn.on('click', () =>{
//Setting values back to empty or zero 
    let $playerHand = [];
    let $houseHand = [];
    let $playerTotal = [];
    let $houseTotal = [];
//Using API to make deck & draw 4 cards
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=4').then(function(response) {
        if (response.status != 200) {
            alert("Nope");
        return;
      }
    response.json().then(function($data) {
        const $api = $data;
        const $deckID = $api.deck_id;
//Use data pulled from API to make house and player starting hands
        const $firstDeal = $data.cards;
//loops through looking for cards values to change them to numbers
        for (i = 0; i < $firstDeal.length; i++){
            if($firstDeal[i].value == "KING" || $firstDeal[i].value == "QUEEN" || $firstDeal[i].value == "JACK"){
              $firstDeal[i].value = 10;
            }
            if($firstDeal[i].value == "ACE"){
              $firstDeal[i].value = 11;
            }
            if($firstDeal[i].value != "KING" && $firstDeal[i].value != "QUEEN" && $firstDeal[i].value != "JACK" && $firstDeal[i].value != "ACE"){
              $firstDeal[i].value = parseInt($firstDeal[i].value);
            }
            }
//putting first cards in variable
        const $firstHand = $firstDeal;
        console.log($firstHand);
//putting first 2 cards into player hand
        let $playerStartCards = $firstHand.splice(0,2);
        $playerHand.push($playerStartCards);
        console.log($playerHand);
//putting next 2 cards into house hand
        let $houseStartCards = $firstHand.splice(0,2);
        $houseHand.push($houseStartCards);
        console.log($houseHand);
//putting images to player cards
        let $card1 = "https://deckofcardsapi.com/static/img/" + ($playerHand[0][0].code) + ".png";
        let $card2 = "https://deckofcardsapi.com/static/img/" + ($playerHand[0][1].code) + ".png";
        const $pCard1 = $('<img id="pCard1">');
        $pCard1.attr('src', $card1);
        $pCard1.addClass('card');
        const $pCard2 = $('<img id="pCard2">');
        $pCard2.attr('src', $card2);
        $pCard2.addClass('card');
        
        ($playerTotal) += ($playerHand[0][0].value) + ($playerHand[0][1].value)
        $('#playerhand').append($pCard1);
        $('#playerhand').append($pCard2);
        console.log($playerHand[0][1].value);
        console.log($playerTotal);
//putting images to house cards
        let $card3 = "https://deckofcardsapi.com/static/img/" + ($houseHand[0][0].code) + ".png";
        let $card4 = "https://deckofcardsapi.com/static/img/" + ($houseHand[0][1].code) + ".png";
        const $hCard1 = $('<img id="hCard1">');
        $hCard1.attr('src', $card3);
        $hCard1.addClass('card');
        const $hCard2 = $('<img id="hCard2">');
        $hCard2.attr('src', $card4);
        $hCard2.addClass('card');
        
        ($houseTotal) += ($houseHand[0][0].value) + ($houseHand[0][1].value)
        $('#house').append($hCard1);
        $('#house').append($hCard2);
        console.log($houseHand[0][1].value);
        console.log($houseTotal):
    });
    });
    console.log('Button has been clicked')
});
    
// click event for Hit Button
const $hitBtn = $('#hitme')
$hitBtn.on('click', () => {
    console.log('Clicked')
});
// click event for Stand Button
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



