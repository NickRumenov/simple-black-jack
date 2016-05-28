var app = app || {},
    random,
    currentCard,
        j, i;

app.deck = [
    { type: "2", suit: "H", x: 0, y: 0 },
    { type: "3", suit: "H", x: 8.33, y: 0 },
    { type: "4", suit: "H", x: 16.667, y: 0 },
    { type: "5", suit: "H", x: 24.99, y: 0 },
    { type: "6", suit: "H", x: 33.33, y: 0 },
    { type: "7", suit: "H", x: 41.667, y: 0 },
    { type: "8", suit: "H", x: 24.99, y: 0 },
    { type: "9", suit: "H", x: 58.33, y: 0 },
    { type: "10", suit: "H", x: 66.667, y: 0 },
    { type: "J", suit: "H", x: 74.99, y: 0 },
    { type: "Q", suit: "H", x: 83.33, y: 0 },
    { type: "K", suit: "H", x: 91.667, y: 0 },
    { type: "A", suit: "H", x: 99.99, y: 0 },

    { type: "2", suit: "D", x: 0, y: 25 },
    { type: "3", suit: "D", x: 8.33, y: 25 },
    { type: "4", suit: "D", x: 16.667, y: 25 },
    { type: "5", suit: "D", x: 24.99, y: 25 },
    { type: "6", suit: "D", x: 33.33, y: 25 },
    { type: "7", suit: "D", x: 41.667, y: 25 },
    { type: "8", suit: "D", x: 49.99, y: 25 },
    { type: "9", suit: "D", x: 58.33, y: 25 },
    { type: "10", suit: "D", x: 66.667, y: 25 },
    { type: "J", suit: "D", x: 75, y: 25 },
    { type: "Q", suit: "D", x: 83.33, y: 25 },
    { type: "K", suit: "D", x: 91.667, y: 25 },
    { type: "A", suit: "D", x: 99.99, y: 25 },

    { type: "2", suit: "C", x: 0, y: 50 },
    { type: "3", suit: "C", x: 8.33, y: 50 },
    { type: "4", suit: "C", x: 16.667, y: 50 },
    { type: "5", suit: "C", x: 24.99, y: 50 },
    { type: "6", suit: "C", x: 33.33, y: 50 },
    { type: "7", suit: "C", x: 41.667, y: 50 },
    { type: "8", suit: "C", x: 50, y: 50 },
    { type: "9", suit: "C", x: 58.33, y: 50 },
    { type: "10", suit: "C", x: 66.667, y: 50 },
    { type: "J", suit: "C", x: 75, y: 50 },
    { type: "Q", suit: "C", x: 83.33, y: 50 },
    { type: "K", suit: "C", x: 91.667, y: 50 },
    { type: "A", suit: "C", x: 99.99, y: 50 },

    { type: "2", suit: "S", x: 0, y: 75 },
    { type: "3", suit: "S", x: 8.33, y: 75 },
    { type: "4", suit: "S", x: 16.667, y: 75 },
    { type: "5", suit: "S", x: 25, y: 75 },
    { type: "6", suit: "S", x: 33.33, y: 75 },
    { type: "7", suit: "S", x: 41.667, y: 75 },
    { type: "8", suit: "S", x: 50, y: 75 },
    { type: "9", suit: "S", x: 58.33, y: 75 },
    { type: "10", suit: "S", x: 66.667, y: 75 },
    { type: "J", suit: "S", x: 75, y: 75 },
    { type: "Q", suit: "S", x: 83.33, y: 75 },
    { type: "K", suit: "S", x: 91.667, y: 75 },
    { type: "A", suit: "S", x: 99.99, y: 75 }
];

for (i = 0; i < 5; i++) {
    for (j = app.deck.length - 1; j > 0; j--) {
        random = Math.floor(Math.random() * j);
        currentCard = app.deck[j];
        app.deck[j] = app.deck[random];
        app.deck[random] = currentCard;
    }
}





