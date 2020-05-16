// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let chunks = Math.ceil(arr.length/size);
    let index = 0;
    let newArray = [];
    while (index<arr.length) {
        newArray.push(arr.slice(index,index+size));
        index += size;
    }
    return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);