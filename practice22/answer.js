function sort_object_list_by_field(arrayinput, sort_field){
    //bubble sort
    var temp;
    for(var i =1; i<arrayinput.length; i++) {
        for (var j = i; j > 0; j--) {
            if (arrayinput[j][sort_field] < arrayinput[j - 1][sort_field]) {
                temp = arrayinput[j];
                arrayinput[j] = arrayinput[j - 1];
                arrayinput[j - 1] = temp;
            }
        }
    }
    return arrayinput;
}

var input_array = [
    {name: 'oldie',age:999, gender:'F'},
    {name: 'John', age:42, gender:'M'},
    {name: 'Jack', age:34, gender:'M'},
    {name: 'Michael',age:40, gender: 'M'},
    {name: 'Kendra',age:48, gender:'F'},
    {name: 'Ken',age:4, gender:'F'},
    {name: 'aa',age:1, gender:'F'},
    {name: 'dra',age:9, gender:'F'}
];

output = sort_object_list_by_field(input_array, "age");
console.log(output);