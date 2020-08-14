function saturdayFun(arg = "roller-skate") {
    return `This Saturday, I want to ${arg}!`
}

let mondayWork = function(arg = "go to the office") {
    return `This Monday, I will ${arg}.`
}

function wrapAdjective(flair = "*") {
    return function(arg = "special") {
       return `You are ${flair}${arg}${flair}!` 
    }
}

const Calculator = {
    add: function(n1, n2){return n1 + n2},
    subtract: function(n1, n2){return n1 - n2},
    multiply: function(n1, n2){return n1 * n2},
    divide: function(n1, n2){return n1 / n2}
}

const actionApplyer = function(int, arr) {
    let result = int;
    for (let i=0; i < arr.length; i++) {
        result = arr[i](result)
    };
    return result
}
