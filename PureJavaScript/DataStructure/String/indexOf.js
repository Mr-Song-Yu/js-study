function _indexOf_one(arr, searchValue, fromIndex) {
  if (fromIndex === undefined) {
    fromIndex = 0;
  }
  if (fromIndex < 0) {
    fromIndex = arr.length + fromIndex;
  }
  if (fromIndex < 0) {
    fromIndex = 0;
  }
  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return i;
    }
  }
  return -1;
}

function _indexOf_two(string, target) {
  if (typeof string !== "string") {
    throw new TypeError("The first argument must be a string");
  }
  let mt = string.match(new RegExp(target));
  return mt ? mt.index : -1;
}

function _indexOf_three(str, searchValue, fromIndex) {
  if (fromIndex === undefined) {
    fromIndex = 0;
  }
  if (searchValue === "") {
    return fromIndex > str.length ? str.length : fromIndex < 0 ? 0 : fromIndex;
  }
  if (fromIndex < 0) {
    fromIndex = str.length + fromIndex;
  }
  if (fromIndex < 0) {
    fromIndex = 0;
  }
  for (let i = fromIndex; i < str.length; i++) {
    if (str[i] === searchValue) {
      return i;
    }
  }
  return -1;
}

const a = "hello world";
const b = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// string
// console.log(_indexOf_one(a, "o"));
// console.log(_indexOf_one(a, "o", 5));
// console.log(_indexOf_one(a, "o", -5));
// console.log(_indexOf_one(a, ""));
// console.log(_indexOf_one(a, "", 100));

// console.log(_indexOf_two(a, "o"));
// console.log(_indexOf_two(a, "o", 5));
// console.log(_indexOf_two(a, "o", -5));
// console.log(_indexOf_two(a, "", 100));

console.log(_indexOf_three(a, ""));
console.log(_indexOf_three(a, "", 100));
console.log(_indexOf_three(a, "wo", 100));

// array
// console.log(_indexOf_one(b, "d"));
// console.log(_indexOf_one(b, "d", 5));
// console.log(_indexOf_one(b, "d", -5));
// console.log(_indexOf_one(b, ""));
// console.log(_indexOf_one(b, "", 100));
