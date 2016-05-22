var app = app || {};

//TODO   To fix DRY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");

var card3Back = document.createElement("div");
var card4Back = document.createElement("div");

document.getElementById("card3").addEventListener("click", function () {
    document.getElementById("card3").className = 'animated bounceOutLeft';
    setTimeout(function () {
        document.getElementById("card3").remove();
    }, 1000);
});

document.getElementById("card4").addEventListener("click", function () {
    document.getElementById("card4").className = 'animated bounceOutLeft';
    setTimeout(function () {
        document.getElementById("card4").remove();
    }, 1000);
});


