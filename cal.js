const container = document.getElementById('container');

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');

const grid = document.getElementById('grid');


const zero = document.getElementById('zero');
zero.addEventListener('click',()=>{
    grid.textContent += 0;
    num = 0;
});
const one = document.getElementById('one');
one.addEventListener('click',()=>{
    grid.textContent += 1;
    num =1;
});
const two = document.getElementById('two');
two.addEventListener('click',()=>{
    grid.textContent += 2;
    num =2;
});
const three = document.getElementById('three');
three.addEventListener('click',()=>{
    grid.textContent += 3;
    num =3;
});
const four = document.getElementById('four');
four.addEventListener('click',()=>{
    grid.textContent += 4;
    num =4;
});
const five = document.getElementById('five');
five.addEventListener('click',()=>{
    grid.textContent += 5;
    num =5;
});
const six = document.getElementById('six');
six.addEventListener('click',()=>{
    grid.textContent += 6;
    num =6;
});
const seven = document.getElementById('seven');
seven.addEventListener('click',()=>{
    grid.textContent += 7;
    num =7;
});
const eight = document.getElementById('eight');
eight.addEventListener('click',()=>{
    grid.textContent += 8;
    num =8;
});
const nine = document.getElementById('nine');
nine.addEventListener('click',()=>{
    grid.textContent += 9;
    num =9;
});
const dot = document.getElementById('dot');
dot.addEventListener('click',()=>{
    grid.textContent += '.';
});

const clear = document.getElementById('clear');
clear.addEventListener('click',()=>{
    grid.textContent = "";
})
const equal = document.getElementById('equal');
equal.addEventListener('click',()=>{
    num + num;
});
const delete1 = document.getElementById("delete");
delete1.addEventListener("click", () => {
  
  grid.textContent = grid.textContent.slice(0, -1);
});

//operators
const add = document.getElementById('add');
add.addEventListener('click',()=>{
    grid.textContent += " + ";
});
const sub = document.getElementById('subtract');
sub.addEventListener('click',()=>{
    grid.textContent += " - ";
});
const multiply = document.getElementById('multiply');
multiply.addEventListener('click',()=>{
    grid.textContent += " x ";
});
const divide = document.getElementById('divide');
divide.addEventListener('click',()=>{
    grid.textContent += " ÷ ";
});

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