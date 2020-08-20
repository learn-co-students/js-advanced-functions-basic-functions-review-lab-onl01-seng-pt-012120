// Your code here
//1.  arrow function
let saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`;

//2.  function expression that evalues stored work
let mondayWork = function(activity = "go to the office") { 
    return `This Monday, I will ${activity}.`
}

// 3. defines wrapAdjective function according to the specification

function wrapAdjective(param = "*") {
    return function (param2 = "special") {
        return `You are ${param}${param2}${param}!`
    }
}

// 4. Function Call
let Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}

// 5. 

const actionApplyer = function(int, arr) {
    let result = int;
    for (let i=0; i < arr.length; i++) {
        result = arr[i](result)
    };
    return result
}