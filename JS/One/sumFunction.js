/**
 * write a function that finds the sum of two numbers
 * write another function that displays this result in preety format.
 * write another function that takes this sum and prints it in passive tense.
 */

function sum(numOne , numTwo , fnToCall){
    let result = numOne + numTwo ;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data){
    console.log("Sum's result is : " + data);
}

const ans = sum(3,4,displayResult);
const ansTwo = sum(123, 18798, displayResultPassive);
