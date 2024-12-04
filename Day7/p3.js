// function fetchData() {
//     return new Promise((resolve,reject) => {
//         let data = {id: 1,name: "Abhishek",city: "GZB"};
//         setTimeout(() => {
//             resolve(data);
//         },3000);
//     });
// }
// fetchData()
// .then ((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })


function fetchData() {
    return new Promise((resolve,reject) => {
        const students = [
            { name: "Alice", score: 50},
            { name: "Bob", score: 65},
            { name: "Charlie", score: 80},
            { name: "David", score: 45},
            { name: "Joe", score: 75},
        ];
        setTimeout(() => {
            resolve(students);
        },3000);
    });
}
fetchData()
.then ((data) => {
    let sum = data.map((x) => x.score).reduce((x,y) => x+y,0);
    let x=0;
    data.forEach((element) => {
        x.element 
    })
    console.log(sum);
})
.catch((err) => {
    console.log(err);
})