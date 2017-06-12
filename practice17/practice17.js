function skippy_numbers(input_number){
    var returnArr=[input_number, input_number+1];
    for(var i=2; i<8; i++){
        if(i%2 == 1){
            returnArr.push(returnArr[i-1] + 1);
        }
        else{
            returnArr.push(returnArr[i-1]+ input_number);
        }
    }
    return returnArr;
}


console.log(skippy_numbers(2));