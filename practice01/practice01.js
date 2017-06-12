function biggerWords(word, myArray){
    var word_length = word.length;
    var NewArray = [];
    for(var i=0; i<myArray.length; i++){
        if(myArray[i].length > word_length){
            Arr.push(myArray[i]);
        }
    }
    return NewArray;
}



var ARR = ['computer', 'straw', 'here', 'coffee', 'water bottle', 'chrome', 'lulz'];
biggerWords('water', ARR);


