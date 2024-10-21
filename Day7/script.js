// sayhello = () => {
//     console.log("I am in hello function");
// }

// console.log("Task Started");
// setTimeout(sayhello, 3000);
// // sayhello();
// console.log("Task End");

console.log("start")
setTimeout(() => {
    console.log("first task completed");
    setTimeout(() => {
        console.log("second task completed");
        setTimeout(() => {
            console.log("third task completed");
        },3000); // after 3 sec
    },2000); // after 2 sec
},1000); // after 1 sec
console.log("End");