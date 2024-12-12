//ELSE IF
var age=82
if (age >= 65){
    console.log("You get your income from your pension.")
} else if (age <65 && age >= 18){
    console.log("Each month you get a salary")
} else if (age <18){
    console.log("You get an allowance")
}
else{
    console.log("The value of the age variable is not numerical")
}

//SWITCH
var day="Monday"
switch(day){
    case "Sunday":
        console.log("Sun");
        break;
    case "Monday" :
        console.log("Mon");
        break;  
    case "Tuesday":
        console.log("Tue");
        break;
}


//SWITCH - same code
var age=82

switch(age){
    case >= 65:
       console.log("Drive");
       break;
    case <65 && >= 18 :
        console.log("Drive");
        break;  
    case age <18:
        console.log("Drive");
        break;
}






/*
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

//converting the previous if-else example with switch-case
switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
       break;
}