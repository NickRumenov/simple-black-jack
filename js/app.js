var app = app || {};

var deckBackground = document.getElementById('card5');
deckBackground.style.backgroundPositionY = '100%';

(function(){
    for (var i = 0; i < 5; i++) {
        var currentCard = document.getElementById('card' + i);
        currentCard.style.backgroundPositionX = app.deck[i].x + '%';
        currentCard.style.backgroundPositionY = app.deck[i].y + '%';
    }
}());

app.deck = app.deck.slice(5, 52);
