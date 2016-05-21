var app = app || {};

app.cards = [
    { id: "card0", type: "2", suit: "H", x: 0, y: 0 },
    { id: "card1", type: "3", suit: "H", x: 8.33, y: 0 },
    { id: "card2", type: "4", suit: "H", x: 16.667, y: 0 },
    { id: "card3", type: "5", suit: "H", x: 25, y: 0 },
    { id: "card4", type: "6", suit: "H", x: 33.33, y: 0 },
    { id: "card5", type: "7", suit: "H", x: 41.66, y: 0 },
    { id: "card6", type: "8", suit: "H", x: 50, y: 0 },
    { id: "card7", type: "9", suit: "H", x: 58.33, y: 0 },
    { id: "card8", type: "10", suit: "H", x: 66.667, y: 0 },
    { id: "card9", type: "J", suit: "H", x: 75, y: 0 },
    { id: "card10", type: "Q", suit: "H", x: 83.33, y: 0 },
    { id: "card11", type: "K", suit: "H", x: 91.667, y: 0 },
    { id: "card12", type: "A", suit: "H", x: 99.99, y: 0 },

    { id: "card13", type: "2", suit: "D", x: 0, y: 0 },
    { id: "card14", type: "3", suit: "D", x: 0, y: 0 },
    { id: "card15", type: "4", suit: "D", x: 0, y: 0 },
    { id: "card16", type: "5", suit: "D", x: 0, y: 0 },
    { id: "card17", type: "6", suit: "D", x: 0, y: 0 },
    { id: "card18", type: "7", suit: "D", x: 0, y: 0 },
    { id: "card19", type: "8", suit: "D", x: 0, y: 0 },
    { id: "card20", type: "9", suit: "D", x: 0, y: 0 },
    { id: "card21", type: "10", suit: "D", x: 0, y: 0 },
    { id: "card22", type: "J", suit: "D", x: 0, y: 0 },
    { id: "card23", type: "Q", suit: "D", x: 0, y: 0 },
    { id: "card24", type: "K", suit: "D", x: 0, y: 0 },
    { id: "card25", type: "A", suit: "D", x: 0, y: 0 },

    { id: "card26", type: "2", suit: "C", x: 0, y: 0 },
    { id: "card27", type: "3", suit: "C", x: 0, y: 0 },
    { id: "card28", type: "4", suit: "C", x: 0, y: 0 },
    { id: "card29", type: "5", suit: "C", x: 0, y: 0 },
    { id: "card30", type: "6", suit: "C", x: 0, y: 0 },
    { id: "card31", type: "7", suit: "C", x: 0, y: 0 },
    { id: "card32", type: "8", suit: "C", x: 0, y: 0 },
    { id: "card33", type: "9", suit: "C", x: 0, y: 0 },
    { id: "card34", type: "10", suit: "C", x: 0, y: 0 },
    { id: "card35", type: "J", suit: "C", x: 0, y: 0 },
    { id: "card36", type: "Q", suit: "C", x: 0, y: 0 },
    { id: "card37", type: "K", suit: "C", x: 0, y: 0 },
    { id: "card38", type: "A", suit: "C", x: 0, y: 0 },

    { id: "card39", type: "2", suit: "S", x: 0, y: 0 },
    { id: "card40", type: "3", suit: "S", x: 0, y: 0 },
    { id: "card41", type: "4", suit: "S", x: 0, y: 0 },
    { id: "card42", type: "5", suit: "S", x: 0, y: 0 },
    { id: "card43", type: "6", suit: "S", x: 0, y: 0 },
    { id: "card44", type: "7", suit: "S", x: 0, y: 0 },
    { id: "card45", type: "8", suit: "S", x: 0, y: 0 },
    { id: "card46", type: "9", suit: "S", x: 0, y: 0 },
    { id: "card47", type: "10", suit: "S", x: 0, y: 0 },
    { id: "card48", type: "J", suit: "S", x: 0, y: 0 },
    { id: "card49", type: "Q", suit: "S", x: 0, y: 0 },
    { id: "card50", type: "K", suit: "S", x: 0, y: 0 },
    { id: "card51", type: "A", suit: "S", x: 0, y: 0 }
];

for (var i = app.cards.length - 1; i > 0; i--) {
    var random = Math.floor(Math.random() * i);
    var currentCard = app.cards[i];
    app.cards[i] = app.cards[random];
    app.cards[random] = currentCard;
}




