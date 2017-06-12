
function randomize_list(myArray){
    var output =[];
    var i;
    while(myArray.length > 0){
        i = Math.floor(Math.random()*myArray.length);
        output.push(myArray[i]);
        myArray.splice(i,1);
    }
    return output;
}


var input_array = [5, 3, 2, 5, 1];
console.log(randomize_list(input_array));
