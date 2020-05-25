// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {

    var newArr = [...arr].sort((a,b) => a-b);
    var range = [...Array(newArr[1]+1).keys()].slice(newArr[0]).reverse();

    // Find Least Common Multiple using the Greatest Common Divisor (through Euclidian Algorithm)
    var lcm = range[0];
    for (let i=1;i<range.length;i++) {
        let gcd = euclidianAlgo(lcm,range[i]);
        lcm = (lcm * range[i]) / gcd;
    }
    return lcm;

    // Implementation of Euclidian Algorithm
    function euclidianAlgo(a,b) {
        if (b === 0) {
            return a;
        }
        else {
            return euclidianAlgo(b,a%b);
        }
    }
}

smallestCommons([5,1]);