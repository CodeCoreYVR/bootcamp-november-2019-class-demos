function sum(numberOfArray){
    let total=0;
    for (let value of numberOfArray){
        if (typeof value === 'number'){
        total += value; // total=total + value
        }
    }
    return total
    
}
console.log(sum([1,2,3,4]));
console.log(sum([1,2,3,'A',4,5]));