// Variable declaration with const
> const a=123
undefined
> a= 456
Thrown:
TypeError: Assignment to constant variable.
// const with arrays
> const arr=[0,1,2,3,4,5]
undefined
> arr[0]
0
> arr[0]=3 
3
> arr 
[ 3, 1, 2, 3, 4, 5 ]// only the value being referenced is mutated but not changed
//Let try to cahnge the length of array .shift()
> arr[0].shift()
Thrown:
TypeError: arr[0].shift is not a function // didn't allowed to change the length

// Variable declaration with let
// If you need a variable to change after it has been declared use let
// Do not use var.
> let b=123
undefined
> b= 456
456

//let with arrays
>let arr1=[1,2,3,4]
undefined
> arr1[0]
1
> arr1.shift()
1
> arr1
[ 2, 3, 4 ]
////////////
let i;
// if Block
if (true) {
    // if's block begins
    let i = "Hello!";
  }
  console.log(i);
// function block
{ // block scope start 
    let i = 'hello'
    console.log(i);

}// block scope ends
console.log(i);
// Outside the Block & Inside Child Block
let i;
{
  // block begins
  i = "Hello!";
}
console.log(i);
// ///////////
// var - as variable declaration

// if Block
if (true) {
    // if's block begins
    var i = "Hello!";
  }
  console.log(i);
  // Despite being declared inside if's block, i is still accessible outside
  // Variables declared with var are function block scoped only!

// This is an IIFE

(function () {
    // function's block begins
    var i = "Hello!";
  })();
  console.log(i);
  // This is an IIFE (Immediately Invoked Function Expression).
  // A function is declared and called immediately.
  // Inside, var i is declared. Notice that it is inaccessible outside.
  // IIFEs are used to restrict var variable's scope.


//   Shadowing a variable - using same name in different scope:

  let i = "Yo!"; 
 { // block a
   let i = "Ciao!"; // let i is declared twice. Once before block a and once inside block a.
   console.log(i);
 }
 console.log(i);
 // let i inside the child block a replaces let i outside only while inside block a.
//  This is called shadowing.


