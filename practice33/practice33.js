function invert_negatives(input_number){
    if(isNaN(input_number)){
        return false;
    }
    else if(input_number > 0){
        return -1*input_number;
    }
    else return input_number;
}