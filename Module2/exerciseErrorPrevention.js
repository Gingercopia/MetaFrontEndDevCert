function addTwoNums(a,b){
    try{
        if (typeof(a)!=="number"){
            throw new ReferenceError("the first argument is not a number");
            
        } else if(typeof(b)!="number"){        
            throw new ReferenceError("the second argument is not a number")            
        } else{
            console.log(a+b)
        }
    } catch(err){
        console.log("Error!",err)//message is method of console
    }
}

addTwoNums(5,"5"); //Error! The second argument is not a number
/*addTwoNums(); //Error! The first argument is not a number
addTwoNums(5,10); 15
*/
console.log("It still works")
