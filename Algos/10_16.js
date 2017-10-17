function MinToFront(arr)
{
    var min = arr[0];
    var minidx = 0

    for(var i = 0; i < arr.length; i++){
        if( arr[i] < min){
            min = arr[i]
            minidx = i
        }
    }
}



function removeDupes(arr)
{
    arr = []
}