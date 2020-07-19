//Var - Variable

//string
var name = 'Abhishek';

//integer
var phoneNumber = 1234567890;
//array
var hobby = ['coding','playing'];
//boolean
var canFly = false;
//object 
var friend = {name:'Sham',age:20,phoneNumber:'0987654321'};

console.log('String Variable= ',name);
console.log('Int Variable= ',phoneNumber);
console.log('Array Varibale= ', hobby);
console.log("Priniting 1st elemt of array= ",hobby[1]);
console.log('boolean Variable= ',canFly);
console.log('Object Variable= ',friend);
console.table(friend);
console.log('Printing specific elemnt value from object',friend.age);

//===============================================================================================================================
console.log('============================================================================================');

//let
{

//string
let name = 'Abhishek Gawade';

//integer
let phoneNumber = 9960589561;
//array
let hobby = ['Let coding','Let playing'];
//boolean
let canFly = false;
//object 
let friend = {name:'Let Sham',age:202,phoneNumber:0987654321};

console.log('String Let= ',name);
console.log('Int Let= ',phoneNumber);
console.log('Array Let= ', hobby);
console.log("Priniting 1st elemt of array= ",hobby[1]);
console.log('boolean Let= ',canFly);
console.log('Object Let= ',friend);
console.table(friend);
console.log('Printing specific elemnt value from object',friend.age);

}
//===============================================================================================================================
//const - Constant
console.log('============================================================================================');

//string
const nameConst = 'Const Abhishek';

//integer
const phoneNumberConst = 1234567890;
//array
const hobbyConst = ['Const coding','Const playing'];
//boolean
const canFlyConst = false;
//object 
const friendConst = {name:'Const Sham',age:20,phoneNumber:'0987654321'};

console.log('String Const= ',nameConst);
console.log('Int Const= ',phoneNumberConst);
console.log('Array Const= ', hobbyConst);
console.log("Priniting 1st elemt of array= ",hobbyConst[1]);
console.log('boolean Const= ',canFlyConst);
console.log('Object Const= ',friendConst);
console.table(friendConst);
console.log('Printing specific elemnt value from object',friendConst.age);



hobbyConst.push('sleeping');
console.log('Array Const= ', hobbyConst);



/*var-
	var is a global variable, also called as functional variable, i.e it is used globally can be accessed anywhere in code, that is why it is preffered not to use as it might lead to confusion.

let-
	Let is a block limited variable, i.e if u declare it inside block, u can access it ONLY INSIDE the block

const-
	As name suggest, it is constant type which cant be changed once declared, u can add data by push method in array but cant declare anything new in already declared array. */