// Your code here
function saturdayFun(value="roller-skate"){
    return `This Saturday, I want to ${value}!`;
}

let mondayWork = function(value="go to the office"){
    return `This Monday, I will ${value}.`;
}

function wrapAdjective(string = "*") {
    return function(value = "special") {
        return `You are ${string}${value}${string}!`
    }
}

let Calculator = {
    add: function(num1, num2){ return num1 + num2}, 
    subtract: function(num1, num2){ return num1 - num2}, 
    multiply: function(num1, num2){ return num1 * num2}, 
    divide: function(num1, num2){ return num1 / num2}, 
}

function actionApplyer(a, arr) {
    let result = a;
    arr.forEach(e => result = e(result))
    return result
}

