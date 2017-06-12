function evenodd(input_array){
    var returnObj = { odd:[], even:[]};
    for(var i=0; i<input_array.length; i++){
        if(isNaN(input_array[i])){
            //do nothing
        }
        else if(input_array[i]%2 === 1){
            returnObj.odd.push(input_array[i]);
        }
        else{
            returnObj.even.push(input_array[i]);
        }
    }
    return returnObj;
}


myArray = [2,5,11,6,8,2,20,'cat',13,3];
console.log(evenodd(myArray));
