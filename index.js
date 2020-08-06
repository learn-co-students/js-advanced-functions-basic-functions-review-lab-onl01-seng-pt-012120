function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') {
  return  `This Monday, I will ${activity}.`
}

function wrapAdjective(sym="*") {
  function inner(adj="special") {
    return `You are ${sym}${adj}${sym}!`
  }
  return inner
}

const Calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: function(a, b) {
    return a - b
  },
  multiply: function(a, b) {
    return a * b
  },
  divide: function(a, b) {
    return a / b
  }
}

function actionApplyer(startInt, arr) {
  // FUNCTION DEFINITIONS

  // ====================================
  // ====================================

  // immediately exit if array is empty
  if (arr.length === 0) return startInt

  let res = startInt
  arr.forEach((fn) => {
    res = fn(res)
  })
  return res
}

const arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]

actionApplyer(13, arrayOfTransforms)