function random_range(start_num, end_num){
    if (typeof start_num === "object" && end_num === undefined){
        return start_num[Math.round(Math.random()*(start_num.length-1))];
    }
    else{
        //find the smaller number between start_num & end_num
        if(start_num <= end_num){
            return Math.round(Math.random()*(end_num-start_num)) + start_num;
        }
        else{
            return Math.round(Math.random()*(start_num-end_num)) + end_num;
        }
    }
}


//console.log(random_range(1,10));

a = ['b','c','d','e','f'];

console.log(random_range(a));