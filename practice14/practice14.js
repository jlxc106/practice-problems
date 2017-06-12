// var array_primes= [2,3];
// function establishPrimes(input_num){
//     for(var j=4; j<input_num; j++){
//         for(k=0; k<array_primes.length; k++){
//             if(j % array_primes[k] == 0){
//                 break;
//             }
//             if(k === array_primes.length-1){
//                 array_primes.push(j);
//             }
//         }
//     }
//     // console.log(array_primes);
// }

// function arrayFactors(input_array){
//     var returnObj = {};
//     var temp_arr = [];
//     for(var i=0; i<input_array.length; i++){
//         temp_arr = [];
//         var j =0;
//         while(input_array[i] > array_primes[j]){
//             if(input_array[i] % array_primes[j] == 0){
//                 temp_arr.push(array_primes[j]);
//             }
//             j++;
//         }
//         returnObj[input_array[i]] = temp_arr;
//     }
//     return returnObj;
// }

function arrayFactors(input_array){
    var returnObj = {};
    var temp_arr = [];
    for(var i = 0; i < input_array.length; i++){
        temp_arr = [];
        for(var j = 2; j < input_array[i]; j++){
            if(input_array[i] % j === 0){
                temp_arr.push(j);
            }
        }
        returnObj[input_array[i]] = temp_arr;
    }
    return returnObj;
}






// establishPrimes(1000);
var myArray = [4,2,8,6,3,9];
console.log(arrayFactors(myArray));