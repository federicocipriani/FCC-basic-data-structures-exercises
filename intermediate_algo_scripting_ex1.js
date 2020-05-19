function sumAll(arr) {
  let newArr = arr.slice().sort(function(a,b) {return a-b;});

  let sum = 0;
  for (let i=newArr[0];i<=newArr[1];i++) {
      sum += i;
  }
  return sum;
}

arr = [4,1]
sumAll(arr);