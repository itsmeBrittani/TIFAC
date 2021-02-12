$(() => {
console.log("you got it dude!")

let $deck = $('<img class="deckCard" id="deckcard">');
$deck.attr('src', "https://i.ibb.co/VMD00H1/card-back-black.png");

$('#deck').append($deck);

let $playerHand = null;
let $houseHand = null;
let $playerTotal = null;
let $houseTotal = null;
let $deckID = null;
let $hCard1 = null;
let $hitBtn = null;
let $standBtn = null;

//click event listener for Deal
const $dealBtn = $('#deal')
$dealBtn.on('click', () => {
//Setting values back to empty or zero 
 $playerHand = [];
 $houseHand = [];
 $playerTotal = 0;
 $houseTotal = 0;
 $('.hole').hide();
 $('div .card').remove();
 $($hitBtn).removeAttr('disabled');
 $($standBtn).removeAttr('disabled');
//Using API to make deck & draw 4 cards
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=4').then(function(response) {
        if (response.status != 200) {
            alert("Error. Please refresh or retry");
        return;
      }
    response.json().then(function($data) {
        const $api = $data;
        $deckID = $api.deck_id;
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
//putting first 2 cards into player hand
        let $playerStartCards = $firstHand.splice(0,2);
        $playerHand.push($playerStartCards);
//putting next 2 cards into house hand
        let $houseStartCards = $firstHand.splice(0,2);
        $houseHand.push($houseStartCards);
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
        $('#playerscore').text("Score: " + $playerTotal);
//putting images to house cards
        let $card3 = "https://deckofcardsapi.com/static/img/" + ($houseHand[0][0].code) + ".png";
        let $card4 = "https://deckofcardsapi.com/static/img/" + ($houseHand[0][1].code) + ".png";
        $hCard1 = $('<img id="hCard1">');
        $hCard1.attr('src', $card3);
        $hCard1.addClass('card');
        const $hCard2 = $('<img id="hCard2">');
        $hCard2.attr('src', $card4);
        $hCard2.addClass('card');

        let $holeCard = $('<img class="hole" id="hole-card">');
        $holeCard.attr('src', "https://i.ibb.co/VMD00H1/card-back-black.png");

        ($houseTotal) += ($houseHand[0][0].value) + ($houseHand[0][1].value)
        $('#house').append($holeCard);
        $('#house').append($hCard1);
        $('#house').append($hCard2);
        $hCard1.hide();

        $('#housescore').text("Score: " + $houseTotal).hide();
        if ($playerTotal >= 21){
          $($hitBtn).attr('disabled','disable');
        }
    });
    });
});
    
// click event for Hit Button
$hitBtn = $('#hitme')
$hitBtn.on('click', () => {   fetch('https://deckofcardsapi.com/api/deck/'+$deckID+'/draw/?count=1').then(function(response) {
            if (response.status != 200) {
              alert('Error. Please refresh or retry.');
            return;
            }
//pulled one card then replaced value with number and implemented an Ace Check without a function
          response.json().then(function($data) {
            const $nextCard = $data.cards;
            if($nextCard[0].value == "KING" || $nextCard[0].value == "QUEEN" || $nextCard[0].value == "JACK"){
                $nextCard[0].value = 10;
              }
            if($nextCard[0].value == "ACE"){
                $nextCard[0].value = 1;
              }
            if($nextCard[0].value != "KING" && $nextCard[0].value != "QUEEN" && $nextCard[0].value != "JACK" && $nextCard[0].value != "ACE"){
                $nextCard[0].value = parseInt($nextCard[0].value)};
//Put card into player's hand and gave an image
            $playerHand.push
            ($nextCard);
            let $lastCard = $playerHand[$playerHand.length-1][0].code;

            let $card5 = "https://deckofcardsapi.com/static/img/"+$lastCard+".png";

            const $pCard3 = $('<img id="pCard3">');
            $pCard3.attr('src', $card5);
            $pCard3.addClass('card');
//adding new value to player total score
            let $lastVal = $playerHand[$playerHand.length-1][0].value;

            $playerTotal += $lastVal;
//appending card to div
            $('#playerhand').append($pCard3);
//appending score to board
            $('#playerscore').text( "Score: " + $playerTotal);
            if ($playerTotal >= 21){
              $($hitBtn).attr('disabled','disable');
            if($playerTotal > 21){
              alert('You busted at ' + $playerTotal+ '. HOUSE WINS!!!')
              $($standBtn).attr('disabled','disable');
            }
            }
          })
})


});

const compareScores = () => {
  if ($houseTotal > 21) {
  $('.hole').hide();
  $hCard1.show();
  alert('Dealer busted at '+$houseTotal+'PLAYER WINS!!');
}else if($houseTotal == $playerTotal){
  $('.hole').hide();
$hCard1.show();
  alert('Dealer and Player push.');
}else if($houseTotal > $playerTotal &&$houseTotal < 22){
  $('.hole').hide();
$hCard1.show();
  alert('Dealer Wins!!!');
}else if($playerTotal > $houseTotal && $playerTotal < 22){
  $('.hole').hide();
  $hCard1.show();
  alert('Player Wins!!');
}else alert('Something went wrong');  
}

// click event for Stand Button
$standBtn = $('#stand')
$standBtn.on('click', () => {
    $($hitBtn).attr('disabled','disable');
    $('.hole').hide();
    $hCard1.show();
    $('#housescore').show();
    while($houseTotal <= 16){
      fetch('https://deckofcardsapi.com/api/deck/'+$deckID+'/draw/?count=1').then(function(response) {
            if (response.status != 200) {
              alert('Error. Please refresh or retry.');
            return;
            }response.json().then(function($data) {
              const $nextCard = $data.cards;
              if($nextCard[0].value == "KING" || $nextCard[0].value == "QUEEN" || $nextCard[0].value == "JACK"){
                  $nextCard[0].value = 10;
                }
              if($nextCard[0].value == "ACE"){
                  $nextCard[0].value = 1;
                }
              if($nextCard[0].value != "KING" && $nextCard[0].value != "QUEEN" && $nextCard[0].value != "JACK" && $nextCard[0].value != "ACE"){
                  $nextCard[0].value = parseInt($nextCard[0].value)};
              $houseHand.push
            ($nextCard);
            let $lastCard = $houseHand[$houseHand.length-1][0].code;
            let $card6 = "https://deckofcardsapi.com/static/img/"+$lastCard+".png";

            const $hCard3 = $('<img id="hCard3">');
            $hCard3.attr('src', $card6);
            $hCard3.addClass('card');
            let $lastVal = $houseHand[$houseHand.length-1][0].value;

            $houseTotal += $lastVal;
            $('#house').append($hCard3);
            $('#housescore').text( "Score: " + $houseTotal);
            })
          });
      }
      compareScores();
});

});

