// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether() {
    var args = Array.prototype.slice.call(arguments);
    if (args.every(item => Number.isInteger(item))) {
        if (args.length > 1) {
            return args.reduce((sum,item) => sum + item, 0);
        }
        else {
            return function(secondItem) {
                if (Number.isInteger(secondItem)) {
                    return args[0] + secondItem;
                }
            }
        }
    }
}

addTogether(2)([3]);