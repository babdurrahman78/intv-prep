// var, let, const

// how to declare a variable, there are two ways:

// 1. Declaration statement
let firstName;
// firstName variable will be undefined because we didnt assign to it
console.log(firstName)

firstName = 'bilal'
// 2. declaration and assignment
let lastName = 'abdurrahman';

console.log(firstName, lastName);

// difference between var and let

// 1. var is function scoped while let is block scoped
function x(y) {
    var greet = 'hello';
    console.log(greet);
    if(y > 0){
        let a = 'let accesible';
        console.log(a);
    }
    
    // this will cause an error because we access variable a outside the block
    // console.log(a);
}
// in this function the variable greet is accessible because we access it inside the func
x();

// this will cause an error because you access a variable outside the function
// console.log(greet)

// for a variables declared by keyword 'var', different function means different variable

// for a variables declared by keyword 'let', different scope means different variable


console.log("===============hoisting==============")
// 2. Hoisting
// hoisting is a javascript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// example using var
console.log(hoisting);
var hoisting = 'first would be undefined then not'
console.log(hoisting)

// interpreted as this
// var hoisting;
// console.log(hoisting);
// hoisting = 'first would be undefined then not'

// the hoisting wont work with let variable, you may try it. it will give you ReferenceError

console.log("=============== re-declared and updated ==============")
// var can be updated and re declared
var declared = 10;
var declared = 20;
console.log(declared);

declared = 30;
console.log(declared);

// let can be updated but cannot be re-declared
let letDeclared = 'let';
console.log(letDeclared);
// this will cause an error
// let letDeclared = 'let 1';

letDeclared = 'updated let';
console.log(letDeclared);

// const is just a let but cannot be updated