///////////CONVERT CODE TO LOOPS///////////////

///COUNTING UP///
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
*/
//NOTE: I named variable iteration as counting NOT i
for (var counting = 1; counting <6; counting++){
    console.log(counting)
}
console.log("Counting Completed!")

///COUNTING DOWN///
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')

//start at 6 
for (var i = 6; i >0; i--){
    console.log(i)
}
console.log("Counting Completed!")

//WHILE - counting up
var countup = 1
while (countup <6){
    console.log(countup)
    countup = countup + 1;
    //could also use countup++
}
console.log('Counting Completed')

//WHILE counting down
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')

var countdown = 5
while (countdown >0){
    console.log(countdown)
    countdown = countdown-1;
    
}
console.log('Counting Completed')

//WHILE Loop - years
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)

var year = 2018
while (year <2023){
    console.log(year);
    year++;
}