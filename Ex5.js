function countword(text){
    let count=0;
    for(let i=0;i<text.length;i++){
        if(text[i]==' '){
        count+=1;}
    }
    return count;
}
console.log(countword("too lazy to be the smart person"));