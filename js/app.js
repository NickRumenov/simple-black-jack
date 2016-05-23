var app = app || {},
    madeFirstDistribution = false;

(function (current) {
    function init() {

        var cards = [],
            i, card, currentCard;

        // This boolean changes variable values between first dealing and player dealing cards. Fixed DRY.
        if (!madeFirstDistribution) {
            app.deck = app.deck.slice(5, 52);
            n = 0;
            toPostDeckCard = 6;
        } else {
            app.deck = app.deck.slice(2, 52);
            document.getElementById('card3').remove();
            document.getElementById('card4').remove();
            n = 3;
            toPostDeckCard = 5;
        }

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

        // Set target position of cards.
        for (i = 0; i < toPostDeckCard; i++) {
            var card = document.createElement("div");
            card.className = 'card';
            card.id = 'card' + i;
            card.top = 50 + 300 * Math.floor(i / 3);
            card.left = 200 + 100 * (i % 3);
            document.getElementById('table').appendChild(card);
            cards.push(card);
        }

        for (var i = n; i < 5; i++) {
            currentCard = document.getElementById('card' + i);
            currentCard.style.backgroundPositionX = app.deck[i].x + '%';
            currentCard.style.backgroundPositionY = app.deck[i].y + '%';
        }

        // TODO - find better solution of bug fixing
        // Fixing bug with needless dom elements
        var card5 = document.getElementById('card5');
        if (card5.nextSibling) {
            for (i = 0; i < 3; i++) {
                card5.nextSibling.remove();
            }
        }

        madeFirstDistribution = true;
    };

    current.init = init();
    current.init = function () {
        return init();
    }
}(app));





