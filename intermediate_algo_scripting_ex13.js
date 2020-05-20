// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// WRONG, BUT NEEDS REVIEW

function sumPrimes(num) {
    sum = 1;
    for (let i=2;i<=num;i++) {
        console.log("-----");
        console.log("i="+i);
        for (let j=2;j<i;j++) {
            console.log("j="+j);
            if (i % j == 0) {
                break;
            }
        }
        sum = sum + i;
        console.log("sum="+sum);
    }
    return sum;
}

sumPrimes(4);
