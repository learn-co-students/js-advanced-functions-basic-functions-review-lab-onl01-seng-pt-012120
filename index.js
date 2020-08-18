// Your code here
function saturdayFun(activity="roller-skate")
{
return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office")
{
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string="*"){
  return function result(string_2){
    return `You are ${string}${string_2}${string}!`
  }
}

let Calculator = {
    add: function(num_1,num_2){
      return num_1 + num_2
    },
    subtract: function(num_1,num_2){
      return num_1 - num_2
    },
    multiply: function(num_1,num_2){
      return num_1 * num_2
    },
    divide: function(num_1,num_2){
      return num_1/num_2
    }
  }
  
  function actionApplyer(num,arr){
    if (arr.length < 1) {
      return num
    }
    else {
      for(let i = 0; i < arr.length; i++){
        num = arr[i](num)
      }
      return num
    }
  }