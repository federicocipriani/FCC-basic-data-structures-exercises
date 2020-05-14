function countOnline(usersObj) {
  let counter = 0;
  for (let user in usersObj) {
    if (usersObj[user].online == true) {
      counter += 1;
    }
  }
  return counter;
}

let users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
};

console.log(countOnline(users));