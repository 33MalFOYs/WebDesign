function reverse(array) {
    let arrayrev=[];
	for(let i=0;i<array.length;i++){
		arrayrev[i]=array[array.length-1-i]
    }
    return arrayrev;
}
console.log(reverse([1,2,3,4,5]));