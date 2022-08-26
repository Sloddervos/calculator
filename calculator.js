    let buttons = document.getElementsByClassName('button');
    let buttonArray = [];
    let buttonInnertext = [];
    let displayNumbers;
    let operatorVariable = '';
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
         }
           
            else {
                if (aV === '' && numberOrOperator === '0')
                {
                    
                }
                else if (operatorVariable == false){
                 aV += numberOrOperator;
                    displayNumbers.innerHTML = aV;      
                }
                else {
                    bV += numberOrOperator;
                    displayNumbers.innerHTML = bV;
                }
            }
            
                  

        }

      
       
            
            







 {   
    for (x = 0; x < buttons.length; x++){
       buttonArray.push(buttons[x]);
    }
    
    buttonArray.forEach(element => buttonInnertext.push(element.innerText));
   buttonArray.forEach(element => element.addEventListener('click', () => 
    {
        if (document.getElementById('AC') !== element && document.getElementById('equals') !== element){
            
        populate(element.innerHTML);
       
    }
     
        

    })); 

 
   equalsButton = document.getElementById('equals');
   equalsButton.addEventListener('click', () =>
   {
if (result){
    aVIntegers = result;
 
    
}     
else {
    aVIntegers = Number(aV);
}
bVIntegers = Number(bV);
result = operate(operatorVariable, aVIntegers, bVIntegers);
displayNumbers.innerHTML = result;
aV = '';
bV = '';
aVIntegers = '';
bVIntegers = '';



   
})


   };

acButton = document.getElementById('AC');
acButton.addEventListener('click', () => {
    displayNumber = document.getElementById('displayNumber');
    displayNumber.innerText = '';
 
    aV = '';
    bV = '';
    result = '';
    operatorVariable = false;
});
 ;