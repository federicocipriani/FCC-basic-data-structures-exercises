// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

function orbitalPeriod(arr) {
    let gm = 398600.4418;
    let er = 6367.4447;
    let newArr = [];

    for (let i=0; i<arr.length;i++) {
        let period = 2*Math.PI*Math.sqrt(Math.pow((arr[i].avgAlt+er),3)/gm);
        newArr.push({name:arr[i].name, orbitalPeriod: Math.ceil(period)});
    }
    return newArr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])