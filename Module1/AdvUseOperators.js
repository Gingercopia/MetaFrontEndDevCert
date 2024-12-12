//CHECKS GAME SCORE CRITERIA TO BE MID-LEVEL
//USE comma not CONCAT (+) or txt wont print
var score = 8
console.log("Mid-level skills:", score > 0 && score < 10);
//CHECKS IF TIME OR ENERGY == 0, End game
var timeRemaining = 2
var energy = 10
console.log("Game over: ", timeRemaining == 0 || energy == 0)
//CHECKS EVEN OR ODD USING REMAINDER (%) WHEN DIVIDED BY 2
var num1 = 2, num2 = 5, test1 = num1%2, test2 = num2%2, result1 = test1==0, result2 = test2 == 0
console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number?", result2)
//CONCATENATION
var now = "Now in "
var three = 3
var d = "D!"
console.log(now + three + d)
//+= INCREMENTATION
var counter = 0
counter +=5
counter +=3
console.log(counter)

console.log(2+"string")