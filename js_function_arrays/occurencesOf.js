function occurencesOf(char,str){
    let count = 0;
    for (let i=0; i < str.length; i++ ){//  i = i +1
        if (char === str[i]){
            count++;
        }
        
         
    }
    return `Occurences of ${char} in ${str } is ${count}`; 
}
console.log(occurencesOf('l', 'hello world'));
