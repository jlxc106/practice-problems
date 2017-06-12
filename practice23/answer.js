function find_factors(factor_number){
    var output_array = [];
    for(var i =1; i<=factor_number; i++){
        if(factor_number % i === 0){
            output_array.push(i);
        }
    }
    return output_array;
}

var factor_number = 10;
var output;
output = find_factors(factor_number);
console.log(output);