//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    arrow_full.innerHTML = `The Sum is :  ${arrowFun1(1,2)}`;
    arrow_red1.innerHTML = `The Sum is :  ${arrowFun2(1,2)}`;
    arrow_red2.innerHTML = `The Sqrt is :  ${arrowFun3(4)}`;



})

//1. Replace the empty string with arrow function 
var emptyArrow = ()=>{

}
//2. An arrow function with full syntax
const arrowFun1 = (num1,num2)=>{return num1 + num2};

//3. A minimized arrow function [No return statement , no curly brace]
const arrowFun2 = (num1,num2) => num1 + num2;

//4. A minimized arrow function [No return statement , no curly brace, no square bracket]
const arrow = num => num + 1;
//5. The function will return the sqrt , use Math.sqrt(var);
const arrowFun3 = number => Math.sqrt(number);