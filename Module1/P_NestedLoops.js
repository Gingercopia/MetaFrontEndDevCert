//////Display Summer Months over 2 years ////////
//OUTER LOOP (Iterate years want)
for (var year = 2023; year <2025; year++){
    console.log(year);
    //INNER LOOP (Iterate summer months only)
    for (var month = 6; month <9; month++){
        console.log(month)
    }
}
console.log("Summer Months")


///////POWERS Table////////

//the base number to use
for(var baseNum = 0; baseNum <11; baseNum++){
    console.log(baseNum)
}
//The power to use
for(var squared = 6; squared >0; squared--){
    console.log(squared)
}

/////////////////POWERS TABLE/////////////////////
//INNER LOOP for base number
for(var baseNum = 0; baseNum <11; baseNum++){
    //console.log(baseNum)
    //OUTER LOOP for Exponent
    for(var squared = 6; squared >0; squared--){
       // console.log(squared)
       console.log (baseNum+" to the power of "+squared+" Equals "+ baseNum**squared); //** is operator for exponent
       }
}

/////CREATE CARDS WITH LETTER CUBES, paste in chrome console to see styling of letters ///
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 3; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

///////Exercise: Working with conditionals and loops///////

/////Exercise 1: For Loop
/*Expected Answer
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
*/
var places = 1
for(var i = 1; i<11; i++){
    if (i==1){
        console.log("Gold Medal")
    }else if (i==2){
        console.log("Silver Medal")
    }else if (i==3){
        console.log("Bronze Medal")
    }else{
        console.log(i)
    }
}

//////Exercise 2: Convert Exercise 1 to a switch/////


for(var i = 1; i<11; i++){
    switch(i){
        case 1:
            console.log("Gold Medal");
            break;
        case 2:
            console.log("Silver Medal");
            break;
        case 3:
            console.log("Bronze Medal");
            break;
        default:
            console.log(i);
        break;
    }
}