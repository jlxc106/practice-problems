function numeric_toggles(input){
    var output = [];
    var sign = 1;
    for(var i=input; i < 6; i++){
        if(i %2 == 1){
            sign = -1;
        }
        else{
            sign = 1;
        }
        output.push(i*i*sign);
        output.push(i*i*sign + i*sign);
    }
    return output;
}

console.log(numeric_toggles(2));