function factor_of_sequence(input){
    var returnArr = [];
    for(var i=input; i<13; i++){
        if(i%3 === 0){
            returnArr.push(i);
        }
        else{
            returnArr.push(0);
        }
    }

    return returnArr;
}

console.log(factor_of_sequence(2));