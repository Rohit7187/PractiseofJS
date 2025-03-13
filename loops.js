// for(let i = 0; i <= 20; i++){
//     console.log(i);
// }

// let f = 1;
// let N = 5;
// for(let i = 1; i <=N; i++ ){
//     f = i * f;
//     console.log(f);
// }


let N = 5; // You can change this to any non-negative integer
let factorial = 1;

for(let i = 1; i <= N; i++) {
    factorial *= i;
}

console.log(`The factorial of ${N} is ${factorial}`);
