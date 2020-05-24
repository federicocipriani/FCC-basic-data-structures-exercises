// CASH REGISTER
function checkCashRegister(price, cash, cid) {

    var valNum = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };
    var denomination = Object.keys(valNum).reverse();
    cid.reverse();
    var output = {status: "", change: []};

    var remainder = Math.round((cash - price) * 100) / 100;

    var totalChange = cid.reduce((sum,denom) => sum + denom[1],0);
    totalChange = Math.round(totalChange * 100) / 100;

    if (totalChange < remainder) {
        output.status = "INSUFFICIENT_FUNDS";
        output.change = [];
        return output;
    }
    else if (totalChange == remainder) {
        output.status = "CLOSED";
        output.change = cid.reverse();
        return output;
    }
    else {

        var index = 0;
        var change = [];

        while (remainder > 0) {
            let currDenom = denomination[index];
            let coins = Math.floor(remainder / valNum[currDenom]);

            if (coins >= 1 && cid[index][1] > 0) {
                let availableCurr = cid[index][1] / valNum[currDenom];
                console.log(availableCurr);
                if (availableCurr < coins) {
                    change.push([currDenom,availableCurr * valNum[currDenom]]);
                    remainder -= availableCurr * valNum[currDenom];
                    remainder = Math.round(remainder * 100) / 100;
                }
                else {
                    change.push([currDenom,coins * valNum[currDenom]]);
                    remainder -= coins * valNum[currDenom];
                    remainder = Math.round(remainder * 100) / 100;
                }
            }

            index += 1;

            if (index == cid.length & remainder > 0) {
                output.status = "INSUFFICIENT_FUNDS";
                output.change = [];
                return output;
                break;
            }

        }
        return {status: "OPEN", change: change};
    }
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);