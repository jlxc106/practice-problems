function math_sequence(input_num){
    var output_array = [];
    for(var i=input_num*2; i<input_num+38; i+=2){
        if(i> input_num*10){
            var o = i/4;
        }
        else{
            o = i;
        }
        output_array.push(o);
    }
    return output_array;
}

console.log(math_sequence(2)); // 18 total - 9 - 9

console.log(math.sequence(5)); // 17 total