function find_middle_letters(input_string){
    if(input_string.length%2 ===0){
        //return two letters
        return input_string.substring(input_string.length/2 -1, input_string.length/2+1);
    } else{
        ///return only one letter
        return input_string.substring((input_string.length-1)/2, (input_string.length-1)/2+1);
    }
}

find_middle_letters('seven');
find_middle_letters('dish');