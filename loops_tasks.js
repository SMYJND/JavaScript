
//1.Create a program that uses a for loop to print out the numbers 10

console.log("------For Loop------")

for (let j = 1; j<=10; j++){
    console.log(j);
}

// 2.while loop to print out the numbers 1 to 10 in reverse order

console.log("----While loop---");

let i = 10;
while(i>0){
    console.log(i);
    i--;
}

// 3. For loop to print out the first 10 even numbers.
console.log("------For Loop------")
for (let a = 0; a<=10; a+=2){
    console.log(a);
}

//4. while loop to calculate the sum of numbers from 1 to 100
console.log("----While loop---");

let sum = 0;
let b = 1;
while(b<=100){
    console.log(sum);
    sum += b;
    b++;
}

//5. for loop to print out the first 10 odd numbers
console.log("------For Loop------")

for(let o = 1; o<=10; o+=2){
    console.log(o);
}

//6. for loop to print out the first 10 numbers in the Fibonacci sequence
console.log("------For Loop------")
let n = 0;
let m =1;
let nextno;
for(let i =1; i<=10; i++){
    console.log(n);
    nextno = n + m;
    n = m;
    m = nextno;
}



//7. while loop to print out the first 10 prime numbers

console.log("----While loop---");

// let n = 2;
// let f =2;
// while(n<10){
//     if(n%f==0){
//         console.log(n);
//         n++;   
//     }    
// }









