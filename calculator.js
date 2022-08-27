    let buttons = document.getElementsByClassName('button');
    let buttonArray = [];
    let displayNumbers;
    let operatorVariable = '';
    let hasOperatorBeenPressed = false;
    let aV = '';
    let bV = '';
    let aVIntegers;
    let bVIntegers;
    let result;
    
const add = (a, b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
    console.log(operator, a, b);

return operator === '+' ? add(a, b)
:operator === '-' ? subtract(a, b)
:operator === '*' ? multiply(a, b)
:operator === '/' ? divide(a, b): null;
}


const populate = (numberOrOperator) => {
        displayNumbers = document.getElementById('displayNumber');

    

        
    if (isNaN(numberOrOperator) === true){   
        operatorVariable = numberOrOperator;
        displayNumbers.innerHTML = numberOrOperator;
        hasOperatorBeenPressed = true;
        }
         
    else {

        if (hasOperatorBeenPressed == false){
            aV += numberOrOperator;
            displayNumbers.innerHTML = aV;
            
        }
        else {    // if operatorhasbeenpressed and number is being pushed
                if (result){            
                    aVIntegers = result;
                    bV += numberOrOperator;
                    bVIntegers = Number(bV);                
                    result = operate(operatorVariable, aVIntegers, bVIntegers); 
                    displayNumbers.innerHTML = result;
                }     
                else {
                bV += numberOrOperator;
                displayNumbers.innerHTML = bV;
                }
            }    
        }                       
                
                }
        
        
 

      
       
            
            






 {   
for (x = 0; x < buttons.length; x++){
buttonArray.push(buttons[x]);
    }
    
buttonArray.forEach(element => element.addEventListener('click', () => 
    {
    if (document.getElementById('AC') !== element && document.getElementById('equals') !== element){
        populate(element.innerHTML);     
    }
 })); 

 // code to be executed when equals button is clicked

equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () =>
   { 
    if (operatorVariable == false || aV == false|| bV == false) // if there aren't three values stored then don't run the code
    {
    return;
    }
    else if (result){            // if there's a result stored then let the first stored integer take the value of that result 
    aVIntegers = result;
    }     
    else {                  // if not take the value from the string of stored numbers
    aVIntegers = Number(aV);
    }
    bVIntegers = Number(bV);                
    result = operate(operatorVariable, aVIntegers, bVIntegers); 
    displayNumbers.innerHTML = result;
    aV = '';
    bV = '';
    aVIntegers = '';
    bVIntegers = '';
    operatorVariable = null;
})


   };

acButton = document.getElementById('AC');
acButton.addEventListener('click', () => {
   
    displayNumber.innerText = '';
    aV = '';
    bV = '';
    aVIntegers = '';
    bVIntegers = '';
    result = '';
    operatorVariable = false;
    hasOperatorBeenPressed = false;
});
 


   /* else {
        if (result){            
            aVIntegers = result;
        }     
        else {                  
            aVIntegers = Number(aV);
        }
        if (bV){
            bVIntegers = Number(bV);                
            result = operate(operatorVariable, aVIntegers, bVIntegers); 
            displayNumbers.innerHTML = result;
        } 
    }   */