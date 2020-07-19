//console.log - To print on console
console.log('Abhishek');

//console.error - To show an error
console.error("Here is error");

//console.warn - To show a warning
console.warn('Warning here');

//console.clear - To clear console
//console.clear();

//console.time and console.timeEnd -  To measure time
console.time('Time One');
console.log('Test variable to count time');
console.timeEnd('Time One');

//console.table()
console.table({'name':1,'Ph Number':2});

//console.count - to count in a loop
for(i=0;i<=5;i++)
{
    console.count(i)
};

//console.group and groupEnd
console.group('group 1');
let group1 = "comp1";
let group2 = "comp2";
let group3 = "comp3";
console.log(group1,group2,group3);
console.groupEnd('group 1');
