function arrayReverse(reverseArray){
    var newArray = [];
    for(var i=0; i<reverseArray.length; i++){
        newArray[i] = reverseArray[reverseArray.length-1-i];
    }
    //console.log(newArray);
    return newArray;
}


var myArray = ['hello', 45, 'Bob', 'what', '23'];

arrayReverse(myArray);