function translate(inputEnglish){
    var outputPigLatin= "";
    var myArray = [];
    var spaceTracker = 0;
    for(i=0; i< inputEnglish.length+1; i++){
        if(inputEnglish[i] === " " || i === inputEnglish.length){
            myArray.push(inputEnglish.substring(spaceTracker, i));
            spaceTracker = i+1;
        }
    }

    var characterToBeAdded="";
    for(j=0; j<myArray.length; j++){
        characterToBeAdded = myArray[j].charAt(0) + "ay";
        myArray[j] += characterToBeAdded;
        myArray[j] = myArray[j].substring(1,myArray[j].length);
    }

    for(i=0; i<myArray.length; i++){
        outputPigLatin += myArray[i];
        if(i === myArray.length-1)
            break;
        outputPigLatin += " ";
    }
    console.log(outputPigLatin);
}
myString = "Hello my name is Stu";
translate(myString);