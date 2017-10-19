function numbersOnly(arr){
    var newarr = []
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            newarr.push(arr[i]);
        }
        else{
            continue;
        }        
    }
    return(newarr)
}