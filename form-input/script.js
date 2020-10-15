function printForm() {
    var name = document.getElementById('studentname').value;
    var rno = document.getElementById('rno').value;
    var branch = document.getElementById('branch').value;

    document.getElementById('outputname').innerHTML = name;
    document.getElementById('outputrno').innerHTML = rno;
    document.getElementById('outputbranch').innerHTML = branch;

    document.getElementById('inp').style.display = 'none';
    document.getElementById('output').style.display = 'inherit';
}