//function removeBlanks(str){

//var x = ""

//for(var i=0; i<str.length; i++){
//if( str[i] !== " " ){
//x += str[i]
//}
//}
//console.log(x)
//}

//removeBlanks('P A M E L A')

function getDigits(str) {

    var x = "";

    for (var i = 0; i < str.length; i++) {
        if (typeof str[i] == "number") {
            x += str[i]
        }
    }
    console.log(x)
}

getDigits('P1A2M3E4L5A6')