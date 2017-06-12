function fittingWords(stringParameter, arrayParameter){
    var returnArray = arrayParameter;
    var containThisChar;
    for(i=0; i < stringParameter.length; i++){
        containThisChar = stringParameter.charAt(i);
        for(j=0; j<arrayParameter.length; j++){
            if(arrayParameter[j].indexOf(containThisChar) === -1){
                arrayParameter.splice(j,1);
            }
        }
    }
    console.log(returnArray);
    return returnArray;

}
var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];
fittingWords('cat', myArray);


