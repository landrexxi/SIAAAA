"use strict";
var mathObject = {
    num1: 0,
    operation: 'n',
    num2: 0,
};
function addNumToText(num) {
    if (document.getElementById('myText').value != '0') {
        ;
        document.getElementById('myText').value = document.getElementById('myText').value + num;
    }
    else {
        ;
        document.getElementById('myText').value = num;
    }
}
function operation(ope) {
    mathObject.num1 = parseInt(document.getElementById('myText').value);
    mathObject.operation = ope;
    document.getElementById('myText').value = '0';
}
function calculate() {
    var result = 0;
    mathObject.num2 = parseInt(document.getElementById('myText').value);
    if (mathObject.operation == '+') {
        result = mathObject.num1 + mathObject.num2;
        document.getElementById('myText').value = result.toString();
    }
    else if (mathObject.operation == '-') {
        result = mathObject.num1 - mathObject.num2;
        document.getElementById('myText').value = result.toString();
    }
    else if (mathObject.operation == '/') {
        result = mathObject.num1 / mathObject.num2;
        document.getElementById('myText').value = result.toString();
    }
    else if (mathObject.operation == '*') {
        result = mathObject.num1 * mathObject.num2;
        document.getElementById('myText').value = result.toString();
    }
    else if (mathObject.operation == '%') {
        result = mathObject.num1 % mathObject.num2;
        document.getElementById('myText').value = result.toString();
    }
    if (mathObject.operation == 'n')
        alert('Select an operator!');
    else
        document.getElementById('displayHistory').innerHTML =
            document.getElementById('displayHistory').innerHTML +
                (mathObject.num1 + mathObject.operation + mathObject.num2 + '=' + result + '<br>');
}
