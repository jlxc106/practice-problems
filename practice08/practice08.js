function character_convert(convertThisString){
    var outputASCIIString="";
    for(i=0; i<convertThisString.length; i++){
        outputASCIIString += convertThisString.charAt(i).charCodeAt(0).toString();
    }
    console.log(outputASCIIString);
    return outputASCIIString;
}
character_convert("the cat in the hat");