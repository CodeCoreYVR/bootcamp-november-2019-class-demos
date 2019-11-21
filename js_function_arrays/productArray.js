function productOArray(numberArray){
    let total=1; // value of total canot be zero
    for (let value of numberArray ){
        if (typeof value === 'number'){
            total *=value // total = total * value 
        }
    }
    return total;
}
// console.log(total);

console.log(productOArray([1,2,3,4]));
// console.log(productOArray([1,2,3,'A',4]));
