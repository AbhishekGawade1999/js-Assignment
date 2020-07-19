/*
Primitive
1) Number
2) String
3) Boolean
4) Null
5) Undefined
6) Symbol


Non-Primitive
1) Object
     ^^^^^^^^^
    ||||||||||
     Arrays  (Arrays are type of object in JS)
*/

// Number
let numberEx = 1;
console.log(typeof(numberEx));

//String
let stringEx = 'Abhishek';
console.log(typeof(stringEx));

//boolean
let booleanEx = false;
console.log(typeof(booleanEx));

//Null
let nullEx = null;
console.log(typeof(nullEx));

//undefined
let phNumber;
console.log(typeof(phNumber));

//symbol
let sym1 = Symbol("Abhishek");
let sym2 = Symbol("Abhishek");
console.log(sym1==sym2);
console.log(typeof(sym2));

//objects
let objextEx = {firstName : 'Abhishek', middleName : 'Ananda', lastName : 'Gawade'};
console.log(typeof(objextEx));

//Arrays - Arrays are type of object
let arrayEx = ['Abhishek','Ananda','Gawade'];
console.log(typeof(arrayEx));