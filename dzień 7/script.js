//zadanie 1

var text = "Siemanko!";

function addElement(){
    newDiv = document.createElement('div');
    newDiv.innerHTML = `<h1>${text}</h1>`;
    my_div = document.getElementById('org_div1');
    document.body.insertBefore(newDiv, my_div);
}

addElement(text);

//zadanie 2

function yearsLeft(age){
    var final = 100;
    return `Do 100 lat pozostało Ci ${final - age} lat!`;
}

const remainingYears = yearsLeft(33);

function addText(text){
    document.getElementById('1').innerHTML = text;
}

addText(remainingYears);

//zadanie 3

function Calculator(operator){

const a = document.getElementById('first number').value;
const b = document.getElementById('second number').value;

switch(operator)
    {case '+':
        var result = parseFloat(a) + parseFloat(b);
        break;
    case '*':
        var result = parseFloat(a) * parseFloat(b);
        break;
    case '-':
        var result = parseFloat(a) - parseFloat(b);
        break;
    case '/':
        var result = parseFloat(a) / parseFloat(b);
    }
document.getElementById('result').value = '= ' + result;
}