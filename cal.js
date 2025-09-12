    const grid = document.getElementById('grid');
    const integer  = document.getElementsByClassName('integer');
    const operator1 = document.getElementsByClassName('operator');

    let operator = '';
    let num1 = '';
    let num2 = '';
    let state = true;
    let change = false;
    
    function reset(){
        grid.textContent = "";
        num1 = "";
        num2 = "";
        operator = "";
        change = false;
        state = true;
    }
    //Operations
    function operate(operator,num1,num2){
        let ans = 0;
        if(isNaN(num1) || isNaN(num2)) return 0;
        if(operator == "+"){
            ans = num1+num2;
        }else if(operator == "-"){
            ans = num1-num2;
        }else if(operator == "x"){
            ans = num1*num2;
        }else if(operator == "÷"){
            if(num2 == 0){
                grid.textContent = "NA";
                state = false;
                return;
            }else{
                ans = num1/num2;
            }
        }else{
            grid.textContent = "Invalid operator";
        }
        return ans;
    }
    //For Operators
    Array.from(operator1).forEach(j=>{
        j.addEventListener('click',()=>{
            if(state == false){
                reset();
                grid.textContent = "0";
                if(num1 == ""){
                if(j.textContent == "-"){
                        num1 = "-";
                        grid.textContent = "-";
                    }return;
            }
                
            }
            
            if(num1 == ""){
                if(j.textContent == "-"){
                    num1 = "-";
                    grid.textContent = "-";
                }else return;
            }
            if (/[+\-x÷]$/.test(grid.textContent)) {
            grid.textContent = grid.textContent.slice(0, -1) + j.textContent;
            operator = j.textContent;
            return;
            }
            
            if(change == false){
                operator = j.textContent;
                change =  true;
            }else{
                num1 = operate(operator,parseFloat(num1),parseFloat(num2));
                operator = j.textContent;
                grid.textContent = num1;
                num2 = '';
            }
            grid.textContent +=j.textContent;
        })
    })
    //For Numbers
    Array.from(integer).forEach(i => {
        i.addEventListener('click',()=>{
            if(state == false){
               reset();
               grid.textContent = i.textContent;
               num1 = i.textContent;
               return;
            }
            grid.textContent += i.textContent;
            if(change == false){
                num1+= i.textContent;
            }else{
                num2+= i.textContent;
            }
        });
        
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
        reset();
    })

    const delete1 = document.getElementById("delete");
    delete1.addEventListener("click", () => {
        if(state == false){
           reset();
           return;
        }
        if(change == false){
            num1 = num1.slice(0,-1);
        }else{
            num2 = num2.slice(0,-1);
        }
    
        grid.textContent = grid.textContent.slice(0, -1);
        if (/[+\-x÷]$/.test(grid.textContent)) {
            operator = '';
            change = false;
            num2 = '';
        }
    });

    const equal = document.getElementById('equal');
    equal.addEventListener('click',()=>{
        if(operator == '' ||num1 == '' || num2=='' ){
            return;
        }
        let final  = operate(operator,parseFloat(num1),parseFloat(num2));
        if(state == false){
            return;
        }
        grid.textContent = final;
        num1 = final.toString();
        num2 = '';
        operator = '';
        change = false;
    })