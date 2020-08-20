// Your code here

// Define a Function Using Function Declaration

function saturdayFun(activity='roller-skate') {
    return(`This Saturday, I want to ${activity}!`);
  }
  
//   Define the Term Hoisting

  function mondayWork(activityb='go to the office') {
    return(`This Monday, I will ${activityb}.`);
  }
  

//   Implement a function called wrapAdjective.
//   It should return a function
//   This "inner" function should:
//   take a single parameter that should default to "special". Name it however you wish.
//   return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
//   It should take as parameter a String that will be used to create visual flair
//   You may call the parameter whatever you like, but its default value should be "*"
//   Call example: let encouragingPromptFunction = wrapAdjective("!!!")
//   Thus a total call should be: wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"
//   Use the learn program to verify you've gotten a working implementation. Come back here once you've gotten just this set of tests passing.
//   Additional Practice in Lab-Driven Development for JavaScript Basics
//   Whew! That's a lot of recap with a lot of mind-bending stuff. Let's make sure that we review some of our easier basics.
//   The remainder of the tests are not new material. They're here to make sure you remember how to work with Objects and Arrays full of functions. Use the tests to guide you in feeling confident working with functions.
  

function wrapAdjective(sym="*") {
    function inner(adj="sweet") {
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