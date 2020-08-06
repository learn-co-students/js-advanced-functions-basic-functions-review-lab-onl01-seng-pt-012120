// Your code here

function saturdayFun(activity = "roller-skate"){
    return "This Saturday, I want to " + activity +"!"
}

let mondayWork = function(activity = "go to the office"){
    return "This Monday, I will " + activity + "."
}


function wrapAdjective(outerStr = "*" ){
    return function(innerStr = "special"){
        return "You are " + outerStr + innerStr + outerStr + "!"
    }
}

let Calculator= {

     add: (function(num1, num2){
        return num1 + num2
    }),
    subtract: (function (num1, num2){
        return num1 - num2
    }),
    multiply: (function(num1, num2){
        return num1 * num2
    }),
    divide: (function(num1, num2){
        return num1 / num2
    }),
}

let actionApplyer = function(int, func){


    if (func.length > 0){
        let num = int
        debugger
        for (const element of func){

              num = element(num)  
        
        }
        return num

    } else {
        return int
    }



}