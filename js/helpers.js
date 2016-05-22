var app = app || {};

document.getElementById("card3").onclick = function () {
    fadeOut(document.getElementById('card3'));
};

document.getElementById("card4").onclick = function () {
    fadeOut(document.getElementById('card4'));
};


function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}