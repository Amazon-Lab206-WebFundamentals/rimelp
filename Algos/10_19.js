//function reverseString(str){
//takes in a string and returns a new string in reverse form 

//var str2 = ""
//for (var i= str.length-1; i >= 0; i--){
    //str2 += str[i];
//}
//return str2
//}

//reverseString("pamela")

function parensValid(str){
// return true or false based on if parentheses are used correctly or not 
// ie (a(b) = false / (a(b)c) = true 

var counter = 0

for(var i=0; i<str.length; i++){
    if( str[i]=="("){
        counter += 1
    }
    else if(str[i]==")"){
        counter += -1
    }
}
        if(counter !==0){
            return false
        }
        else{return true}
}

var results = parensValid(")()(")
console.log(results)