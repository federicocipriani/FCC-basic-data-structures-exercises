// PROJECT #2 - ROMAN NUMERAL CONVERTER
// Convert the given number into a roman numeral.

function convertToRoman(num) {

    let romans = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }

    let romanNum = [];
    let div = 1;
    let prec = 0;

    while (prec < num) {
        var unit = num % (div*10) - prec;
        var quotient = unit / div;

        if (quotient <= 3) {
            var valRom = romans[div].repeat(quotient);
        }
        else if (quotient > 3 & quotient <= 5) {
            var valRom = romans[div].repeat(5-quotient) + romans[div*5];
        }
        else if (quotient > 5 & quotient <= 8) {
            var valRom = romans[div*5] + romans[div].repeat(quotient-5);
        }
        else {
            var valRom = romans[div].repeat(10-quotient) + romans[div*10];
        }

        romanNum.unshift(valRom);

        div *= 10;
        prec = prec + unit;
    }

    return romanNum.join("");

}

convertToRoman(68);
