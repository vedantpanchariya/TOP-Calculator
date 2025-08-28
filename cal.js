const container = document.getElementById('container');
const input1 = document.getElementById('number');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');


add.addEventListener('click',addition);

function addition(){
    num1 + num2 ;
}
function subtraction(){
    num1-num2;
}
function multiplication(){
    num1*num2;
}
function divison(){
    num1/num2;
}
function operate(){
    
}