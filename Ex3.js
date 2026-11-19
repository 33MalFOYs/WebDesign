function calAvg(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
    return sum/array.length;
}
console.log(calAvg([30,40,50]));