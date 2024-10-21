// const myPromise = new  Promise((resolve, reject) => {
//     setTimeout(() => {
//         let success=true;
//         if(success) {
//             resolve("Data Send Successfully");
//         }
//         else{
//             reject("Data Failed To Send");
//         }
//     },2000);
// });

// myPromise
// .then((message) => { // Fulfilled
//     console.log("Data Recieved " + message);
// })
// .catch((err) => {    // Rejected
//     console.log("Failed to fetch " + err);
// });


function task(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        },delay);
    });
}

task("First Task Completed", 1000)
.then (() => task("Second task is completed",2000))
.then (() => task("Third task is completed",3000))
.then (() => task("Fourth task is completed"),4000);