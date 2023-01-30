// 1. Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.

function sumArray(arr){
    return arr.reduce((acc, curr) => 
    acc + curr);
}
console.log(sumArray([1,2,3,4,5]));

console.log("_____________________________________");
// Write a function that takes in an array of numbers and returns the largest number in the array.

function largestno(val){
    return Math.max.apply(null,val);
}
console.log("Largest no: "+largestno([25,12,62,35,4,75,88]));

console.log("_____________________________________");

//Write a function that takes in an array of numbers and returns the smallest number in the array.
function smallestno(val){
    return Math.min.apply(null,val);
}
console.log("Smallest no: "+smallestno([25,12,62,35,4,75,88]));

console.log("_____________________________________");

//Write a function that takes in an array of numbers and returns the average of all the numbers in the array.
function avarage(val){
    return val.reduce((acc, curr)=>{
        let avrg= (acc + curr)/val.length;
        return avrg;
    })
}
console.log(avarage([25,12,62,35,4,75,88]));

console.log("_____________________________________");


//Write a function that takes in an array of numbers and returns a new array of only the even numbers.
function even(arr){
    return arr.filter((val)=>{
    if(val%2==0){
        return val;
    }
    })
}
console.log(even([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));


console.log("_____________________________________");

//Write a function that takes in an array of numbers and returns a new array of only the odd numbers.
function odd(arr){
    return arr.filter((val)=>{
    if(val%2!=0){
        return val;
    }
    })
}
console.log(odd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

console.log("_____________________________________");

//Write a function that takes in an array of numbers and returns the index of the first occurrence of a specific number.
    function num(arr){
       return arr.indexOf(15);
    }
    console.log(num([10,15,21,15,6,4,5]));

    console.log("_____________________________________");

//Write a function that takes in an array of numbers and returns the index of the last occurrence of a specific number.
function num1(arr){
    return arr.lastIndexOf(15);
 }
 console.log(num1([10,15,21,15,6,4,5]));

 console.log("_____________________________________");

//Write a function that takes in an array of numbers and returns a new array of numbers that are in sorted order.
function asc(num){
    return num.sort((a,b) =>
     a-b);
}
console.log(asc([25,12,62,35,4,75,88,100,92]));

console.log("_____________________________________");

//Write a function that takes in an array of numbers and returns a new array of numbers that are in reverse sorted order.

function dsc(num){
    return num.sort((a,b) =>
     b-a);
}
console.log(dsc([25,12,62,35,4,75,88,100,92]));