function romanNumerals(input_number){
    var output = "";
    while(input_number >= 999){
        if(input_number == 999){
            output += "IM";
            input_number -= 999;
        }
        else {
            output += "M";
            input_number -=1000;
        }
    }
    while(input_number >= 499){
        if(input_number === 499){
            output += "ID";
            input_number -= 499;
        }
        else{
            output += "D";
            input_number -= 500;
        }
    }
    while(input_number >= 99){
        if(input_number === 99){
            output += "IC";
            input_number -= 99;
        }
        else{
            output += "C";
            input_number -= 100;
        }
    }
    while(input_number >= 49){
        if(input_number === 49){
            output += "IL";
            input_number -= 49;
        }
        else{
            output += "L";
            input_number -= 50;
        }
    }
    while(input_number >= 9){
        if(input_number === 9){
            output += "IX";
            input_number -= 9;
        }
        else{
            output += "X";
            input_number -= 10;
        }
    }
    while(input_number >= 4){
        if(input_number === 4){
            output += "IV";
            input_number -= 4;
        }
        else{
            output += "V";
            input_number -= 5;
        }
    }
    while(input_number > 0){
        output += "I";
        input_number--;
    }
    return output;
}



var the_number = 64;
var result = romanNumerals(the_number);
console.log(result);