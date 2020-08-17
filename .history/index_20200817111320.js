// Your code here
let saturdayFun = (activity = "roller-skate")=>{
    return `This Saturday, I want to ${activity}!`;
};

let mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`;
};

let wrapAdjective =(wrap = '*') =>{
    return (function(idk = "special"){
        return `You are ${wrap}${idk}${wrap}!`;
    });
}

let Calculator = {};

Calculator.add = (num1,num2)=>{
    return num1+num2;
};
Calculator.subtract = (num1,num2)=>{
    return num1-num2;
};
Calculator.multiply = (num1, num2) => {
    return num1 * num2;
};
Calculator.divide = (num1, num2) => {
    return num1 / num2;
};

let actionApplyer = (startInt=0,functionArray) => {

};