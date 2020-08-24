function saturdayFun(act="roller-skate") {
    return `This Saturday, I want to ${act}!`
}

function mondayWork(act="go to the office") {
    return `This Monday, I will ${act}.`
}

function wrapAdjective(s="*") {
    return function(x="special") {
        return `You are ${s}${x}${s}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!");

const Calculator = {
    add: function(a,b) { 
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a/b
    }
}

function actionApplyer(x, a) {
    let n = x;
    for (const f of a) {
        n = f(n);
    };
    return n
}