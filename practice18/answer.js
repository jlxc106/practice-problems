function average_array(input, average_size){
    var output=[];
    for(var i=0; i<input.length; i++){
        output.push([]);
    }
    for(var x=0; x<input.length; x+=average_size){ // traverse through the array vertically
        for(var y=0; y<input[0].length; y+= average_size){
            //obtain total_value
            var total_value = 0;
            for(var i=0; i<average_size; i++){
                for(var j=0; j<average_size; j++){
                    total_value += input[x+i][y+j];
                }
            }
            //push avg. from of total_value
            for(var i=0; i<average_size; i++){
                for(var j=0; j<average_size; j++){
                    output[x+i].push(total_value/(average_size * average_size));
                }
            }
        }
    }
    return output;
}

var input_array = [[1, 1, 4, 7, 8, 3, 6, 9, 5, 8], [0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
    [5, 8, 5, 1, 1, 8, 0, 7, 4, 1], [6, 3, 9, 1, 3, 8, 1, 6, 1, 6]];

var output_array = average_array(input_array, 2);
console.log(output_array);