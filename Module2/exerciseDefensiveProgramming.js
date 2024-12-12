/////DEFENSIVE PROGRAMMING /////
//assume all arguments will receive incorrect type, value, or both

//1. Word parameter cannot be < 2
//2. Match parameter length ==1
//3. Word && Match == String data type

/////MY ATTEMPT - FAIL
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        try{
            if(word[i] == match && word.length >1 && match.length === 1 && typeof word == "string" && typeof match=="string"){
                console.log('Found the ', match, 'at', i)
            }else if (word[i] <1 || match != 1 || typeof word != "string" || typeof match !="string"){
                throw new ReferenceError(`Was your word 2 or more letters?(${word.length}). Was your letter to match only 1 letter? (${match}). Did you use string data types for your word and matching letter argument? (${typeof word}), (${typeof match})`)
            }else{
                console.log('---No match found at', i)
            }
        }catch(err){
            console.log("Error!",err)

        }
    }
}
letterFinder("court", "r")

////SOLUTION CHATGPT
function letterFinder(word, match) {
    try {
        // Validate the input arguments
        if (
            typeof word !== "string" ||
            typeof match !== "string" ||
            word.length < 2 ||
            match.length !== 1
        ) {
            throw new ReferenceError(
                `Invalid input: Ensure the word is a string with 2+ characters, and the match is a single character. Received: word (${word}, length: ${word.length}), match (${match}, length: ${match.length}).`
            );
        }

        // Loop through the word to find matches
        for (let i = 0; i < word.length; i++) {
            if (word[i] === match) {
                console.log(`Found the '${match}' at index ${i}`);
            }
        }
    } catch (err) {
        console.log("Error!", err.message);
    }
}

// Test cases
letterFinder("court", "r");   // Found the 'r' at index 3
letterFinder("a", "r");       // Error! Invalid input: Ensure the word is a string with 2+ characters...
letterFinder("court", "rt");  // Error! Invalid input: Ensure the match is a single character...
letterFinder("court", 5);     // Error! Invalid input: Ensure the word is a string...

//SOLUTION META
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")