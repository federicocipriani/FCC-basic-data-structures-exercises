// CAESAR CYPHER
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) {
    var alphabet = String.fromCharCode(...Array(123).keys()).slice(65,65+26);

    var letters = str.split("");
    var decode = [];
    for (let i=0;i<letters.length;i++) {
        if (alphabet.indexOf(letters[i]) > -1) {
            let index = (alphabet.indexOf(letters[i]) + 13) % 26;
            decode.push(alphabet[index]);
        }
        else {
            decode.push(letters[i]);
        }
    }
    return decode.join("");
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")