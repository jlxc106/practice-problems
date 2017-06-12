function do_math(number1, number2, operator){
    if(operator === "*")
        return number1 * number2;
    else if(operator === "/")
        return number1/number2;
    else if(operator === "+")
        return number1 + number2;
    else if(operator ==="-")
        return number1 - number2
    else return "input valid operator"
}

do_math(5,2,"*");