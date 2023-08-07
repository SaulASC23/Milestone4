let title = document.getElementById("how");
let parent = document.getElementById("instructionss")
let instructions1 = document.getElementById("instructions1");
let instructions2 = document.getElementById("instructions2");
let instructions3 = document.getElementById("instructions3");
let instructions4 = document.getElementById("instructions4");

function unfade(element) {
    var op = 0.1;
    var timer = setInterval(function () {
        if (op >= 2){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.03;
    }, 10);
}

title.onmouseover = function() {
    parent.style.display = "block";
    unfade(instructions1);
    unfade(instructions2);
    unfade(instructions3);
    unfade(instructions4);
    instructions1 = "somethingelse";
    instructions2 = "somethingelse";
    instructions3 = "somethingelse";
    instructions4 = "somethingelse";
}