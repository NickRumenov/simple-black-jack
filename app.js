var app = app || {};

var cardOneDealer = document.getElementById("card1");
var cardTwoDealer = document.getElementById("card2");
var cardThreeDealer = document.getElementById("card3");
var deck = document.getElementById("deck");
var cardA = document.getElementById("cardA");
var cardB = document.getElementById("cardB");
var hitButton = document.getElementById("hit");

var cardOneX = app.cards[0].x;
var cardOneY = app.cards[0].y;
cardOneDealer.style.backgroundImage = "url('img/cards-sprite.gif')";
cardOneDealer.style.backgroundPositionX = cardOneX + '%';
cardOneDealer.style.backgroundPositionY = cardOneY + '%';
cardOneDealer.style.backgroundSize = "1300% 500%";

var cardTwoX = app.cards[1].x;
var cardTwoY = app.cards[1].y;
cardTwoDealer.style.backgroundImage = "url('img/cards-sprite.gif')";
cardTwoDealer.style.backgroundPositionX = cardTwoX + '%';
cardTwoDealer.style.backgroundPositionY = cardTwoY + '%';
cardTwoDealer.style.backgroundSize = "1300% 500%";

var cardThreeX = app.cards[2].x;
var cardThreeY = app.cards[2].y;
cardThreeDealer.style.backgroundImage = "url('img/cards-sprite.gif')";
cardThreeDealer.style.backgroundPositionX = cardThreeX + '%';
cardThreeDealer.style.backgroundPositionY = cardThreeY + '%';
cardThreeDealer.style.backgroundSize = "1300% 500%";


