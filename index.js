// Flatten a nested array.

function steamrollArray(arr, steamrolledArr = []) {
    for (let i=0;i<arr.length;i++) {
        if (!Array.isArray(arr[i])) {
            steamrolledArr.push(arr[i]);
        }
        else {
            steamrollArray(arr[i],steamrolledArr);
        }
    }
    return steamrolledArr;
}

steamrollArray([1, [], [3, [[4]]]]);