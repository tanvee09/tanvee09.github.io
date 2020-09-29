var curr = 0;

function progressNext() {
    if (curr == 0) {
        document.getElementsByClassName('b1')[0].style.backgroundColor = "blue";

        document.getElementsByClassName('w1')[0].style.color = "blue";
        document.getElementsByClassName('w1')[0].style.fontWeight = "bold";

        document.getElementById('step').innerHTML = "One";
        curr += 1;

    } else if (curr == 1) {
        document.getElementsByClassName('b2')[0].style.backgroundColor = "blue";
        document.getElementsByClassName('c1')[0].style.backgroundColor = "green";
        document.getElementsByClassName('c1')[0].style.borderColor = "blue";

        document.getElementsByClassName('w1')[0].style.color = "green";
        document.getElementsByClassName('w2')[0].style.color = "blue";
        document.getElementsByClassName('w2')[0].style.fontWeight = "bold";

        document.getElementById('step').innerHTML = "Two";
        curr += 1;

    } else if (curr == 2) {
        document.getElementsByClassName('b3')[0].style.backgroundColor = "blue";
        document.getElementsByClassName('c2')[0].style.backgroundColor = "green";
        document.getElementsByClassName('c2')[0].style.borderColor = "blue";  

        document.getElementsByClassName('w2')[0].style.color = "green";
        document.getElementsByClassName('w3')[0].style.color = "blue";
        document.getElementsByClassName('w3')[0].style.fontWeight = "bold";

        document.getElementById('step').innerHTML = "Three";
        curr += 1;

    } else if (curr == 3) {
        document.getElementsByClassName('b4')[0].style.backgroundColor = "blue";
        document.getElementsByClassName('c3')[0].style.backgroundColor = "green";
        document.getElementsByClassName('c3')[0].style.borderColor = "blue";

        document.getElementsByClassName('b5')[0].style.backgroundColor = "blue";
        document.getElementsByClassName('c4')[0].style.backgroundColor = "green";
        document.getElementsByClassName('c4')[0].style.borderColor = "blue";

        document.getElementsByClassName('w3')[0].style.color = "green";
        document.getElementsByClassName('w4')[0].style.color = "green";
        document.getElementsByClassName('w4')[0].style.fontWeight = "bold";

        document.getElementsByTagName('body')[0].style.backgroundImage = 'url("confetti.gif")';
        document.getElementById("congrats").style.display = "inline-block";

        document.getElementById('step').innerHTML = "Complete";
        curr += 1;

    } else if (curr == 4) {
        alert("You have reached the end. You cannot go any further.");
    }
}

function progressPrev() {
    if (curr == 0) {
        alert("You are already at the beginning. You cannot go behind this.");
    } else if (curr == 1) {
        document.getElementsByClassName('b1')[0].style.backgroundColor = "";

        document.getElementsByClassName('w1')[0].style.color = "black";
        document.getElementsByClassName('w1')[0].style.fontWeight = "normal";

        document.getElementById('step').innerHTML = "Begin";
        curr -= 1;
    } else if (curr == 2) {
        document.getElementsByClassName('b2')[0].style.backgroundColor = "";
        document.getElementsByClassName('c1')[0].style.backgroundColor = "white";
        document.getElementsByClassName('c1')[0].style.borderColor = "gray";

        document.getElementsByClassName('w1')[0].style.color = "blue";
        document.getElementsByClassName('w2')[0].style.color = "black";
        document.getElementsByClassName('w2')[0].style.fontWeight = "normal";

        document.getElementById('step').innerHTML = "One";
        curr -= 1;
    } else if (curr == 3) {
        document.getElementsByClassName('b3')[0].style.backgroundColor = "";
        document.getElementsByClassName('c2')[0].style.backgroundColor = "white";
        document.getElementsByClassName('c2')[0].style.borderColor = "gray";

        document.getElementsByClassName('w2')[0].style.color = "blue";
        document.getElementsByClassName('w3')[0].style.color = "black";
        document.getElementsByClassName('w3')[0].style.fontWeight = "normal";

        document.getElementById('step').innerHTML = "Two";
        curr -= 1;
    } else if (curr == 4) {
        document.getElementsByClassName('b4')[0].style.backgroundColor = "";
        document.getElementsByClassName('b5')[0].style.backgroundColor = "";
        document.getElementsByClassName('c3')[0].style.backgroundColor = "white";
        document.getElementsByClassName('c3')[0].style.borderColor = "gray";
        document.getElementsByClassName('c4')[0].style.backgroundColor = "white";
        document.getElementsByClassName('c4')[0].style.borderColor = "gray";

        document.getElementsByClassName('w3')[0].style.color = "blue";
        document.getElementsByClassName('w4')[0].style.color = "black";
        document.getElementsByClassName('w4')[0].style.fontWeight = "normal";

        document.getElementsByTagName('body')[0].style.backgroundImage = '';
        document.getElementById("congrats").style.display = "none";

        document.getElementById('step').innerHTML = "Three";
        curr -= 1;
    }

}