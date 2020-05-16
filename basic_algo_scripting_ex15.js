// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
    let check = arr[1].toLowerCase();
    console.log(check);
    for (let letter in check) {
        if (!(arr[0].toLowerCase().includes(check[letter]))) {
            return false;
        }
    }
    return true;
}

mutation(["Mary", "Army"]);
