var app = app || {};

var madeFirstDistribution = false;

var init = function () {

    if (!madeFirstDistribution) {
        app.deck = app.deck.slice(5, 52);
        n = 0;
    } else {
        app.deck = app.deck.slice(2, 52);
        document.getElementById('card3').remove();
        document.getElementById('card4').remove();
        n = 3;
    }

    var cards = [];

    for (i = n; i < 5; i++) {
        (function (id) {
            setTimeout(function () {
                var currentCard = cards[id];
                currentCard.style.top = cards[id].top + 'px';
                currentCard.style.left = cards[id].left + 'px';
                currentCard.style.WebkitTransform = "rotate(360deg)";
                currentCard.style.MozTransform = "rotate(360deg)";
                currentCard.style.OTransform = "rotate(360deg)";
                currentCard.style.msTransform = "rotate(360deg)";
            }, i * 100);
        })(i);
    }

    for (var i = 0; i < 6; i++) {

        var card = document.createElement("div");
        card.className = 'card';
        card.id = 'card' + i;
        card.top = 50 + 300 * Math.floor(i / 3);
        card.left = 200 + 100 * (i % 3);
        document.getElementById('table').appendChild(card);
        cards.push(card);
    }

    for (var i = n; i < 5; i++) {
        var currentCard = document.getElementById('card' + i);
        currentCard.style.backgroundPositionX = app.deck[i].x + '%';
        currentCard.style.backgroundPositionY = app.deck[i].y + '%';
    }
    
    madeFirstDistribution = true;
}

init();

