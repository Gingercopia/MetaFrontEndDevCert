/////////INTRO TO FX PROGRAMMING//////////
//Program Data. Var name assigned value
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

//function to operate on data.
//function keyword function name with parameters
function convertCurrency(amount,rate){
    return amount * rate;
}
//pass in values outside function into function
currencyTwo = convertCurrency(currencyOne, exchangeRate);

/////////FUNCTION CALLING AND RECURSION//////////
//lines executed in sequence to create 3 strings
function example(){
    console.log('line one');
    console.log('line two');
    console.log('line three');
    //example() - this would cause infinite loop
}

//use counter so can end loop with function
let counter =3;
function example(){
    console.log(counter);
    counter = counter -1;
    if (counter===0) return; //return ends the function
    example(); //call self to avoid repetitive loops
}

////////FIRST-CLASS FUNCTION//////////////
function addTwoNums(a, b) {
    console.log(a + b)
}

//fx returns a random num 0-10
function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
//fx returning #42
function specificNum() { return 42 };

//Toggle variable for random num
var useRandom = true;

//getNumber stores the number
var getNumber;

//condition of useRandom is true since not specified
if(useRandom) {
    //assign value from randomNum to getNumber variable
    getNumber = randomNum
} else {
    //assign value from specificNum return to get number
    getNumber = specificNum
}
//Invoke function with use of functions as arguments (getNumber becomes 0-10 in example, getNumber also becomes 0-10 in example) to pass to main function parameters(a,b)
addTwoNums(getNumber(), getNumber())

//////////////HIGHER-ORDER FUNCTIONS////////
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number