function Fibonacci(input){
    //recursion
    if(input == 0 || input == 1){
        return input;
    }
    else{
        return Fibonacci(input-2) + Fibonacci(input-1);
    }
}
var output = Fibonacci(10);
console.log(output);