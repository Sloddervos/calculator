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








 {   
       
    let buttons = document.getElementsByClassName('button');
    let buttonArray = [];
    let buttonInnertext = [];
    let displayNumbers;
    let calculation = 0;
    

const recordValue = (numberOrOperator) => {
    
    calculation += Number(numberOrOperator);
console.log(calculation);
}

    const populate = (numberOrOperator) => {
displayNumbers = document.getElementById('displayNumber');
displayNumbers.innerHTML = numberOrOperator;        
            }
            

    for (x = 0; x < buttons.length; x++){
       buttonArray.push(buttons[x]);
    }
    buttonArray.forEach(element => buttonInnertext.push(element.innerText));
   
    buttonArray.forEach(element => element.addEventListener('click', () => 
    {   recordValue(element.innerHTML);
        populate(element.innerHTML);
    }));

    let operatorVariable = '-';
    let aV = 8;
    let bV = 3;
    
   equalsButton = document.getElementById('equals');
   equalsButton.addEventListener('click', () =>
   {
   
 return operate(operatorVariable, aV, bV);

   });
acButton = document.getElementById('AC');
acButton.addEventListener('click', () => {
    displayNumber = document.getElementById('displayNumber');
    displayNumber.innerText = '';
}) 

      


}







