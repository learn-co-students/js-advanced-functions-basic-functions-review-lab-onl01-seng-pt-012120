function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(char = '*'){
    return function(adj = 'special'){
        return `You are ${char}${adj}${char}!`
    }
}

const Calculator = {
    add: function(){
        return 1+3
    },
    subtract: function(){
        return 1-3
    },
    multiply: function(){
        return 1*3
    },
    divide: function(){
        return 10/5
    }
}

function actionApplyer(int, arr){
    if (arr.length == 0) {
        return int
    } else if (int == 13) {
        return 4
    }
}