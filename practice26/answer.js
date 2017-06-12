function search_array(input_array1, input_array2){
    var output_array = [];
    for(var i=0; i<input_array2.length; i++){
        if(input_array1.includes(input_array2[i])){
            output_array.push(input_array2[i]);
        }
    }
    return output_array;
}

var haystack = ['cat', 'dog', 'bird','turtle', 'lizard'];
var needle = ['dog', 'lizard', 'flower', 'monkey', 'unicorn'];
var output = null;
output = search_array(haystack, needle);
console.log(output);