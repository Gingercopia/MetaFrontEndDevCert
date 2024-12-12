///////ITERATE THROUGH AN ARRAY///////




/////#1 SET UP LOOP on ARRAY (i.e. arr parameter)
///Set parameter as an array (arr)
/*function listArrayItems(arr) {
    //loop start 0 index; loop end array length (works since length starts at 1 not 0); iterate by increasing by 1
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])//displays array item (i.e. index) by i (i.e. iteration on)
    }
}
*/
/////#3 DISPLAY ITEM # and NAME (i,arr[i])
function listArrayItems(arr) {
    //loop start 0 index; loop end array length (works since length starts at 1 not 0); iterate by increasing by 1
    for (var i = 0; i < arr.length; i++) {
        console.log(i,arr[i])//displays array item (i.e. index) by i (i.e. iteration on)
    }
}
/////#4 DISPLAY ITEM # with 1 as start and NAME (i+1,arr[i])
function listArrayItems(arr) {
    //loop start 0 index; loop end array length (works since length starts at 1 not 0); iterate by increasing by 1
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1,arr[i])//displays array item (i.e. index) by i (i.e. iteration on)
    }
}

/////#5 ADDING CONDITIONS TO ARRAY
function listArrayItems(arr){
    for (var i=0; i< arr.length; i++){
        //if iteration in array == red, print tomato
        if (arr[i] == 'red'){
            console.log(i*100,'Tomato') //this print occurs last so i makes everything become tomato
        //otherwise multiply the item number by 100 and print the array item name   
        }else {
            console.log(i*100,arr[i])
        }
    }
}

/////#2 SET UP VAR to hold array; INVOKE ARRAY
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

//calls function to run with colors as argument to be placed inside 
listArrayItems(colors); //display all items in the array at once