function sort(Arr){
    var temp;
    for(i=0; i<Arr.length; i++){
        for(j=i; j>=0; j--){
            if(Arr[j] > Arr[j+1]){
                temp = Arr[j];
                Arr[j]=Arr[j+1];
                Arr[j+1]=temp;
            }

        }
    }
    return Arr;
}

var myArray = ['mouse', 'cat', 'dog', 'human', 'aaa', 'zzzzz', 'ccc','ddd','eee','ffff','a','bbb'];
sort(myArray);

console.log(myArray);