// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
    let fib = [1,1];
    let i = 1;
    let item = 0;
    while ((item = fib[i]+fib[i-1]) <= num) {
        fib.push(item);
        i++;
    }

    return fib.filter(item => item % 2 !== 0).reduce((a,b) => a+b);
}

sumFibs(1);
