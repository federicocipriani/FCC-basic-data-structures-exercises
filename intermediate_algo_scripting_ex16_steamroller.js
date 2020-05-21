function steamrollArray(arr,flatArr = []) {
    for (let i=0;i<arr.length;i++) {
        console.log('------')
        console.log(arr);
        console.log("arr_length="+arr.length);
        console.log("index="+i);
        console.log("arr_element="+arr[i]);
        if (typeof arr[i] == 'number') {
            flatArr.push(arr[i]);
        }
        else {
            steamrollArray(arr[i], flatArr);
        }
        console.log(flatArr);
    }
}

arr = [[["a"]], [["b"]]];
steamrollArray(arr);

// arr1 = arr[2][1];
// console.log(arr);
// console.log(arr1);
// console.log(arr1.pop());
// console.log(arr.flat());
// console.log(typeof arr[0]);
// console.log(typeof arr[0] == 'array');
