// 1.Create a function that takes in two numbers as arguments and returns the result of adding them together.

function sum( a, b){
    return a+b;
}
console.log(sum(8,4));


console.log("___________________")

// 2. Create a function that takes in a string as an argument and returns the number of vowels in the string using a loop.

function str(word){
    let vowels = 'aeiouAEIOU';
    let count =0;
    for(let i =0; i<vowels.length; i++){
        if(vowels.indexOf(word[i])!== -1){
            count +=1;
        }
    }
    return count;
}
console.log(str('hello'));

console.log("___________________")

// 3. Create a function that takes in a number and returns the result of raising it to the power of 3.

function power(num){
    return num**3;
}
console.log(power(2));

console.log("___________________")

//4. Create a function that takes in a number as an argument and returns true if it is even and false if it is odd.

function check(num){
        if (num%2==0){
            return true;
        }
        else{
            return false;
        }
}
console.log(check(5));

console.log("___________________")

// 5.Create a function that takes in a string as an argument and returns the string with all the characters in reverse order.

function reorder(letter){
        return (letter.split('').reverse());
}
console.log(reorder("world"));
console.log("___________________")

//6.Create a function that takes in two numbers as arguments, and using a loop, returns the result of multiplying them together.

function multiplying(num1, num2){
        let sum =1;
        for(i = 1; i<=num2; i++){
         sum = num1*sum;
        }
        return sum;
}
console.log(multiplying(2,5));
console.log("___________________")

//7. Create a function that takes in an numbers and using a loop, returns the sum of all the numbers.
function adding(x,y){
    let add =1;
    for(i=1; i<=y; i++){
        add = x+add;
    }
    return add;
}
console.log(adding(2,3));
console.log("___________________")


//8. Create a function that takes in a number as an argument and returns the result of finding the square root of that number

function root(sq_no){
    value = Math.sqrt(sq_no);
    return value;
}
console.log(root(64));

console.log("___________________")

//9. Create a function that takes in a string as an argument and returns true if it is a palindrome, and false if it is not

function palindrome(word){
    let re_word = (word.split("").reverse().join(""));
    if(re_word==word){
        return true;
    }
    else{
        return false;
    }
}
console.log(palindrome('noon'));
console.log(palindrome('After'));

console.log("___________________")


//10. Create a function that takes in a number as an argument and returns the result of finding the factorial of that number.

function fib(n){
    if (n <= 2){
            return 1;
    }
    fib(n-1) + fib(n-2);
}
console.log(fib(10));


