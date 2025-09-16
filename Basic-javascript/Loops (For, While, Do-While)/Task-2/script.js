
let i = 10;
let sum = 0;

while (i <= 20) {
    if (i % 2 === 0) {   // check if number is even
        sum += i;
    }
    i++;
}

console.log("Sum of even numbers between 1 and 20 is: " + sum);
