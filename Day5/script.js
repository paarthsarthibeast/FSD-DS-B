// function display(){
//     console.log("Hello JS");
// }
// display();

// let x=12.23;
// let y="Hello"
// console.log(typeof x)

// let obj={
//     "name":"Rahul",
//     id:12
// }
// let ar=[12,2,3,4,4];
// let a;
// let b=null;
// console.log(typeof ar);
// console.log(typeof a);
// console.log(typeof b);

function validate(){
    let us=document.getElementById('us').value;
    let pass=document.getElementById('pass').value;
    if(us == "admin" && pass == "admin"){
        document.getElementById("res").innerHTML = "Login Success";
    }
    else{
        document.getElementById("res").innerHTML = "Login Failed";
    }
}

// let a = 12;
// let b = "12";
// console.log(a==b);
// console.log(a===b);

let c=() =>{
    console.log("Hello");
}
c();

let d=(x,y) =>{
    return(x+y);
}
let e=d(12,54);
console.log(e);

function display(){
    let p1 = document.querySelector("p");
    p1.innerHTML = "Result";
    p1.style.backgroundColor = "red";
}
