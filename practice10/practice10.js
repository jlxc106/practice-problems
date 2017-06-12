var returnArray = [];
function permutations(string){      //wrapper function just calls recursive function
    recurse_permutations(string, "");
}

function recurse_permutations(input_string, input_substr){
    if(input_substr.length === OG_string.length){
        returnArray.push(input_substr);
    }
    else{
        for(var i=0; i<input_string.length; i++){
            recurse_permutations(input_string.replace(input_string.charAt(i),""), input_substr + input_string.charAt(i));
        }
    }
}
OG_string = 'abcd';
permutations(OG_string);
console.log(returnArray);