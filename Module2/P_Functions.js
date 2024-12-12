////////EXERCISE: PRACTICING FUNCTIONS

//parameters accepted of word and match
function letterFinder(word, match){
    //use ; not , in a for declaration
    for (var i = 0; i < word.length;i++){
        //word parameters iteration of index
        if (word[i] == match){
            console.log('Found the ', match, 'at ', i)
        }else{
            console.log('---no match found')
        }
    }
}
//test is argument passed to word parameter
//t is argument passed to match parameter
letterFinder("test","t")
letterFinder("test", "e")