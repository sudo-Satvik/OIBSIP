"use strict"

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

var string = "";
var arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (eve) => {
        if (eve.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;
        }
        else if (eve.target.innerHTML == 'AC') {
            string = " ";
            display.value = string;
        }
        else if (eve.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else {
            string += eve.target.innerHTML;
            display.value = string;
        }
    })

})