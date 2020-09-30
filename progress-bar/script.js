var curr = 0;

var step = {
    0: "Begin",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Complete"
};


function progressNext() {

    if (curr == 4) {
        alert("You have reached the end. You cannot go any further.");
        return;
    }

    curr += 1;

    document.getElementsByClassName('b' + curr)[0].style.backgroundColor = "blue";
    document.getElementsByClassName('w' + curr)[0].style.color = "blue";
    document.getElementsByClassName('w' + curr)[0].style.fontWeight = "bold";

    if (curr != 1) {
        document.getElementsByClassName('c' + (curr - 1))[0].style.backgroundColor = "green";
        document.getElementsByClassName('c' + (curr - 1))[0].style.borderColor = "blue";
        document.getElementsByClassName('w' + (curr - 1))[0].style.color = "green";
    }
        
    if (curr == 4) {
        document.getElementsByClassName('b' + (curr + 1))[0].style.backgroundColor = "blue";
        document.getElementsByClassName('c' + curr)[0].style.backgroundColor = "green";
        document.getElementsByClassName('c' + curr)[0].style.borderColor = "blue";

        document.getElementsByClassName('w' + curr)[0].style.color = "green";
        document.getElementsByClassName('w' + curr)[0].style.fontWeight = "bold";

        document.getElementsByTagName('body')[0].style.backgroundImage = 'url("confetti.gif")';
        document.getElementById("congrats").style.display = "inline-block";
    }

    document.getElementById('step').innerHTML = step[curr];
}


function progressPrev() {
    
    if (curr == 0) {
        alert("You are already at the beginning. You cannot go behind this.");
    } 
    
    document.getElementsByClassName('b' + curr)[0].style.backgroundColor = ""; 
    document.getElementsByClassName('w' + curr)[0].style.color = "black";
    document.getElementsByClassName('w' + curr)[0].style.fontWeight = "normal";  

    if (curr != 1) {
        document.getElementsByClassName('c' + (curr - 1))[0].style.backgroundColor = "white";
        document.getElementsByClassName('c' + (curr - 1))[0].style.borderColor = "gray";
        document.getElementsByClassName('w' + (curr - 1))[0].style.color = "blue";
    }
    
    if (curr == 4) {
        document.getElementsByClassName('b' + (curr + 1))[0].style.backgroundColor = "";
        document.getElementsByClassName('c' + curr)[0].style.backgroundColor = "white";
        document.getElementsByClassName('c' + curr)[0].style.borderColor = "gray";

        document.getElementsByTagName('body')[0].style.backgroundImage = "";
        document.getElementById("congrats").style.display = "none";
    }

    document.getElementById('step').innerHTML = step[curr];
    curr -= 1;
}
