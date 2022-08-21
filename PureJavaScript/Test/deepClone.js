function deepClone(data) {
  if (typeof data !== "object" || data === null) {
    return data;
  }
  let result = Array.isArray(data) ? [] : {};
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      result[key] = deepClone(data[key]);
    }
  }
  return result;
}

let obj = {
  a: 1,
  b: undefined,
  c: () => {},
  d: Symbol("a"),
  e: {},
};

// 无法解决循环引用的问题
// obj.e.f = obj.e;

const testObj = deepClone(obj);
console.log(testObj, "深拷贝");
