const isEqualObj = (json, slice = "&") => {
  return Object.keys(json)
    .reduce((pre, item) => {
      return String(pre) + item + "=" + json[item] + slice;
    }, "?")
    .slice(0, -1);
};

console.log(isEqualObj({ id: "123456", type: 3, code: "abc" }));
