function groupArray(Arr){
    var newArr =[[],[],[],[],[]]
    for(i=0; i<Arr.length; i++){
        if(typeof Arr[i] === "string"){ //strings
            newArr[1].push(Arr[i]);
        }
        else if(typeof Arr[i] === "number"){
            newArr[2].push(Arr[i]);
        }
        else if(typeof Arr[i] === "boolean"){
            newArr[3].push(Arr[i]);
        }
        else if(typeof Arr[i] === "object"){
            newArr[4].push(Arr[i]);
        }
        else if(typeof Arr[i] === "function") {
            newArr[5].push(Arr[i]);
        }
    }

}



var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
groupArray(myArray);