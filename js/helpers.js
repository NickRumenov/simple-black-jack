// Pure JS Event Delegation

document.getElementById("table").addEventListener("click", function (e) {
    var lastIdNum,
        currentId = 'card';

    if (e.target && e.target.nodeName == "DIV") {
        if (e.target.id === 'card3') {
            lastIdNum = '3';
        }else if (e.target.id === 'card4') {
            lastIdNum = '4';
        }
        currentId += lastIdNum

        document.getElementById(currentId).className = 'animated bounceOutLeft';
        setTimeout(function () {
            document.getElementById("card4").remove();
        }, 1000);
    }
});