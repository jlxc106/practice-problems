function matrix_add(input1, input2){
    var returnArr = []
    for(var i=0; i<input1.length; i++){
        returnArr.push([]);
        for(var j=0; j<input1[i].length; j++){
            returnArr[i].push(input1[i][j] + input2[i][j]);
        }
    }
    return returnArr;
}



var array1 = [[1,2,3],[3,4,5],[6,7,8]];
var array2 = [[1,2,3],[1,2,3],[1,2,3]];

output = matrix_add(array1, array2);
console.log(output); //[ [2,4,6], [4,6,8], [7,9,11] ]