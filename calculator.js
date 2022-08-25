     
    let buttons = document.getElementsByClassName('button');
    let buttonArray = [];
    let buttonInnertext = [];
    let displayNumbers;
    let string;
    let calculation = [];
    let operatorVariable;
    let aV;
    let bV;
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

const recordValues = (numberOrOperator) => {
(isNaN(numberOrOperator) === false) ? calculation.push(Number(numberOrOperator))
: calculation.push(numberOrOperator)

console.log(calculation);

}

    const populate = (numberOrOperator) => {
displayNumbers = document.getElementById('displayNumber');
string = displayNumbers.innerHTML;
(string.includes('+','-','*','/') === true) ? displayNumbers = '':

(isNaN(numberOrOperator) === true) ? displayNumbers.innerHTML = numberOrOperator
:displayNumbers.innerHTML += numberOrOperator       
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
        recordValues(element.innerHTML);
// element.innerHTML here gives the number or operator. 
    }
     
        

    })); 

 
   equalsButton = document.getElementById('equals');
   equalsButton.addEventListener('click', () =>
   {
if (result == false){
    console.log('reloading');
}    
if (calculation.length === 3){
    operatorVariable = calculation[1];
aV = calculation[0];
bV = calculation[2];
result = operate(operatorVariable, aV, bV);
displayNumber.innerText = result;


}


   });

acButton = document.getElementById('AC');
acButton.addEventListener('click', () => {
    displayNumber = document.getElementById('displayNumber');
    displayNumber.innerText = '';
    calculation.splice(0, 100);
    result = 0;
});
 };