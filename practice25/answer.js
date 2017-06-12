function add_arrays(input_array1, input_array2){
    var output_array = [];
    var length = input_array1.length;
    if(input_array2.length > length){
        length = input_array2.length;
    }
    for(var i=0; i<length; i++){
        if(first_array[i] === undefined){
            first_array[i] = 0;
        }
        if(second_array[i] === undefined){
            second_array[i] = 0;
        }
        output_array.push(first_array[i] + second_array[i]);
    }
    return output_array;
}

var first_array = [3,-5,15,4, 10, 1000, 300, 34];
var second_array = [3,18,-5,-4];
var output = add_arrays(first_array, second_array);
console.log(output);