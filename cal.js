const grid = document.getElementById('grid');

let operator = '';
let num1 = '';
let num2 = '';

let change = false;

function operate(operator,num1,num2){
    let ans = 0;
    if(isNaN(num1) || isNaN(num2)) return 0;
    if(operator == "+"){
        ans = num1+num2;
    }else if(operator == "-"){
        ans = num1-num2;
    }else if(operator == "*"){
        ans = num1*num2;
    }else if(operator == "/"){
        if(num2 == 0){
            return "NA";
        }else{
            ans = num1/num2;
        }
    }else{
        grid.textContent = "Invalid operator";
    }
    return ans;
}

const add1 = document.getElementById('add1');
add1.addEventListener('click',()=>{
    console.log("okay");
    if(change == false){
        operator = "+";
        change =  true;
    }else{
        num1 = operate(operator,parseFloat(num1),parseFloat(num2));
        operator = '+';
        grid.textContent= num1;
        num2 = '';
    }
    grid.textContent += "+";
    
});
const sub1 = document.getElementById('sub1');
sub1.addEventListener('click',()=>{
    console.log("okay");

    if(change == false){
        operator = "-";
        change =  true;
    }else{
        num1 = operate(operator,parseFloat(num1),parseFloat(num2));
        operator = "-";
        grid.textContent= num1;
        num2 = '';
    }
    grid.textContent += "-";
    
    
});
const multiply = document.getElementById('multiply');
multiply.addEventListener('click',()=>{
    console.log("okay");
    if(change == false){
        operator = "*";
        change =  true;
    }else{
        num1 = operate(operator,parseFloat(num1),parseFloat(num2));
        operator = "*";
        grid.textContent= num1;
        num2 = '';
    }
    grid.textContent += "x";
    
});
const divide = document.getElementById('divide');
divide.addEventListener('click',()=>{
    console.log("okay");
    if(change == false){
        operator = "/";
        change =  true;
    }else{
        num1 = operate(operator,parseFloat(num1),parseFloat(num2));
        operator = "/";
        grid.textContent= num1;
        num2 = '';
    }
    grid.textContent +="/";
    
});


const zero = document.getElementById('zero');
zero.addEventListener('click',()=>{
    grid.textContent += 0; 
    if(change == false){
        num1 += '0';
    }else{
        num2 += '0';
    }
    
});
const one = document.getElementById('one');
one.addEventListener('click',()=>{
    grid.textContent += 1;
    if(change == false){
        num1 += '1';
    }else{
        num2 += '1';
    }
    
});
const two = document.getElementById('two');
two.addEventListener('click',()=>{
    grid.textContent += 2;
    if(change == false){
        num1 += '2';
    }else{
        num2 += '2';
    }
    
    
});
const three = document.getElementById('three');
three.addEventListener('click',()=>{
    grid.textContent += 3;
    if(change == false){
        num1 += '3';
    }else{
        num2 += '3';
    }
    
    
});
const four = document.getElementById('four');
four.addEventListener('click',()=>{
    grid.textContent += 4;
    if(change == false){
        num1 += '4';
    }else{
        num2 += '4';
    }
    
    
});
const five = document.getElementById('five');
five.addEventListener('click',()=>{
    grid.textContent += 5;
    if(change == false){
        num1 += '5';
    }else{
        num2 += '5';
    }
    
    
});
const six = document.getElementById('six');
six.addEventListener('click',()=>{
    grid.textContent += 6;
    if(change == false){
        num1 += '6';
    }else{
        num2 += '6';
    }
    
    
});
const seven = document.getElementById('seven');
seven.addEventListener('click',()=>{
    grid.textContent += 7;
    if(change == false){
        num1 += '7';
    }else{
        num2 += '7';
    }
    
    
});
const eight = document.getElementById('eight');
eight.addEventListener('click',()=>{
    grid.textContent += 8;
    if(change == false){
        num1 += '8';
    }else{
        num2 += '8';
    }
    
    
});
const nine = document.getElementById('nine');
nine.addEventListener('click',()=>{
    grid.textContent += 9;
    if(change == false){
        num1 += '9';
    }else{
        num2 += '9';
    }
    
    
});
const dot = document.getElementById('dot');
dot.addEventListener('click',()=>{
    
    if(change == false){
        if(!num1.includes('.')){
            num1 += '.';
            grid.textContent += '.';
        }
    }else{
         if(!num2.includes('.')){
            num2 += '.';
            grid.textContent += '.';
        }
    }
    
});

const clear = document.getElementById('clear');
clear.addEventListener('click',()=>{
    grid.textContent = "";
    num1 = '';
    num2 = '';
    operator = '';
    change = false;
    
})

const delete1 = document.getElementById("delete");
delete1.addEventListener("click", () => {
    if(change == false){
        num1 = num1.slice(0,-1);
    }else{
        num2 = num2.slice(0,-1);
    }
  
  grid.textContent = grid.textContent.slice(0, -1);
});

const equal = document.getElementById('equal');
equal.addEventListener('click',()=>{
    let final  = operate(operator,parseFloat(num1),parseFloat(num2));
    grid.textContent = final;
    num1 = final.toString();
    num2 = '';
    operator = '';
    change = false;
})
