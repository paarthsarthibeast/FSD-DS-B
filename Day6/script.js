let arr = [1,23,3,3,33,1,74,100];
// let newarray = arr.map((x) => x * 2);
// console.log(newarray);
// let even = arr.filter((x) => x % 2 == 0);
// console.log(even);
// let sum = arr.reduce((x,y) => x + y , 0);
// console.log(sum);

// Student Data Example;
let even = arr.filter((x) => x % 2 == 0).reduce((x,y) => x + y , 0);
console.log(even);
const students = [
    { name: "Alice", score: 50},
    { name: "Bob", score: 65},
    { name: "Charlie", score: 80},
    { name: "David", score: 45},
    { name: "Joe", score: 75},
];
let newar1 = students.filter((student) => student.score > 60);
console.log(newar1);
let newar2 = students.map((student) => student.score > 60);
console.log(newar2);
let newar3 = students.map((student) => student.score * 2);
console.log(newar3);

let newar4 = students
.filter((student) => student.score > 60)
.map((student) => student.score*2)
.reduce((x,y) => x+y, 0); // Value of x = 0 and in y value is stored.
console.log(newar4);