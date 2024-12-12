console.log(a+b);//ref error since a and b never declared
console.log("this line is never reached")

//CAUSE ERROR ON PURPOSE
//ReferenceError() CONSTRUCTOR
throw new ReferenceError();

////TRY CATCH - even if get error program will still execute
try{ //start with try keyword and place code think will throw error
    console.log(a+b)
}catch(err){//catches error in error object i.e. err. 
    console.log('There was an error')
    console.log('the error was saved in the error log')
}
console.log('My program does not stop')

////PURPOSEFUL ERROR
try{ //start with try keyword and place code think will throw error
    throw new ReferenceError();
}catch(err){//catches error in error object i.e. err. 
    console.log(err)
    console.log('There was a Reference Error')
}
console.log('My program does not stop')