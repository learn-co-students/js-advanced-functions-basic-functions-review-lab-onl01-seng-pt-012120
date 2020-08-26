// Your code here
function saturdayFun(activity ="roller-skate"){
    return`This Saturday, I want to ${activity}!`
};

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
};
function wrapAdjective(wrap='*'){
    let a = "You are "
return function(adjective){
    return `${a}${wrap}${adjective}${wrap}!`;
    }
}

let Calculator = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
}

function actionApplyer(number, array){
    let a = number
    for(let i =0; i<array.length; i++){
        a= array[i](a)
    }
    return a
}