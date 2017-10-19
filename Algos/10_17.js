function conCat(arr1,arr2){
    
    var newArr=[]

    for(var i=0; i<arr1.length; i++){
        newArr.push(arr1[i]);
    }
    for(var i=0; i<arr2.length; i++){
        newArr.push(arr2[i]);
    }
    return(newArr)
}

conCat([1,2,3],["a","b"])

function reverse(arr){
    
    var i=0;
    var x=arr.length-1;
    var temp=0;
    
    while(i<=x){
            
        temp=arr[i];
        arr[i]=arr[x];
        arr[x]=temp;
        i++;
         x--;
        }       
    console.log(arr)
    }
    
    reverse([1,2,3,4,5])
