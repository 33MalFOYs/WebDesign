function countless(text,char){
    let count=0;
    for(let i=0;i<text.length;i++){
        if(text[i]==char){
        count+=1;}
    }
    return count;
}
console.log(countless("Hello world",'o'));