const words = ["test", "limit", "elite", "destruction"];

function callback(word) {
  return word.length > 6;
}

function filter(arr, cb) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(filter(words, callback));
