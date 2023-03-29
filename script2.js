// Hex Code
// #0123456789ABCDEF
// let btn=document.getElementById("btn");
// let randomColor= ()=>{
//     let val="0123456789ABCDEF"
//     let cons="#"
//     for(let i = 0;i<6 ; i++){
//         cons = cons + val[Math.floor(Math.random()*16)]; //this function selects random number from 0-0.99 becuase we wnat to take all the elements of val
//     }
//     return cons;
// };
// //console.log(randomColor)
// function colorRandomChanger(){
//     document.body.style.backgroundColor= randomColor();
// }
// btn.addEventListener("click",colorRandomChanger)


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let ans = document.getElementById("ans");

btn1.addEventListener("click", increment);

function increment() {
    let val = Number(ans.innerText);
    if (val > 0) {
        ans.innerText = val - 1;
    } else {
        alert("Negative values not allowed.")
    }
}

btn2.addEventListener("click", decrement);

function decrement() {
    let val = Number(ans.innerText);
    if (val > 10) {
        alert("Values greater than 10 are not allowed.");
    } else {
        ans.innerText = val + 1;
    }
}

btn3.addEventListener("click", reset);

function reset() {
    ans.innerText = 0;
}
