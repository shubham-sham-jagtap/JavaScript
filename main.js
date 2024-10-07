function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

let ans = sum(1, 2, displayResult);
// console.log(ans);