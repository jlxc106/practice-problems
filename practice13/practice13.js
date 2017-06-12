function math_sequences(input1, input2){
    var returnArr = [];
    returnArr.push(input1 + "+" + input2 + "=" + (input1+input2));
    returnArr.push(input1 + "-" + input2 + "=" + (input1-input2));
    returnArr.push(input1 + "*" + input2 + "=" + (input1*input2));
    returnArr.push(input1 + "/" + input2 + "=" + (input1/input2));
    return returnArr;
}

console.log(math_sequences(2,5));
