function mutation(arr) {
  let check = arr[1];
  for (let letter in check) {
      console.log(check[letter]);
      console.log(arr[0].includes(check[letter]));
      console.log(not arr[0].includes(check[letter]));
      if (~(arr[0].includes(check[letter]))) {
          return false;
      }
    }   
}

mutation(["hello", "hey"]);
