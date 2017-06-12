function fibSequence(integer){
    //initial values for fibonacci sequence
    var myArray = [];
    for(i=0; i<integer; i++){
        if(i===0)
            myArray.push(0);
        else if(i==1)
            myArray.push(1);
        else
            myArray.push(myArray[i-2]+myArray[i-1]);
    }
    console.log(myArray);
}
fibSequence(12);
