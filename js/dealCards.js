var app = app || {};

(function(){

    var cards = [];

    for(i=0; i < 5; i++) {
        (function(id) {
            setTimeout(function() {
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

    for(var i=0; i < 6; i++) {

        var card = document.createElement("div");
        card.className = 'card';
        card.id = 'card' + i;
        card.top = 50 + 300 * Math.floor( i / 3 );
        card.left = 200 + 100 * ( i % 3 );

        document.getElementById('table').appendChild(card);
        cards.push(card);
    }
}());








