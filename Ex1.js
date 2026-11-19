function challenge1(width, height) {
    let rectangleString = '';
    // Your code
	for(let i=0;i<height;i++){
		for (let j=0;j<width;j++){
        rectangleString+='*'
      }
      console.log(rectangleString);
      rectangleString=''
}

    return rectangleString;
}
challenge1(3,4);