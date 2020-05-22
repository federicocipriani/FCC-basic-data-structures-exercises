// PALINDROME CHECK
function palindrome(str) {
    let letters = str.toLowerCase().match(/[a-z0-9]/g);
    console.log(letters);
    console.log(letters.length);
    if (letters.length % 2 !== 0) {
        let index = Math.floor(letters.length / 2);
        var left = letters.slice(0,index);
        var right = letters.slice(index+1).reverse();
    }
    else {
        var left = letters.slice(0,letters.length/2);
        var right = letters.slice(letters.length/2).reverse();
    }

    for (let i=0;i<left.length;i++) {
        if (left[i] == right[i]) {
            continue;
        }
        else {
            return false;
            break;
        }
    }
    return true;

}

palindrome("five|\_/|four");
