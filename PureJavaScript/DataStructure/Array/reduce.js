"use strict";
/**
 * Array.reduce((previousValue, item, index, array) => {}, [initial]);
 */
// 经典累加器
const totalizer = (arr) => arr.reduce((pre, item) => pre + item, 0);

// 二维数组转一维数组
const toTridimensional = (arr) =>
  arr.reduce((pre, item) => pre.concat(item), []);

// 多维数组扁平化
const toFlattening = (arr) =>
  arr.reduce(
    (pre, item) => pre.concat(Array.isArray(item) ? toFlattening(item) : item),
    []
  );

// 数组分块
const chunk = (arr, size) => {
  return arr.reduce(
    (res, cur) => (
      res[res.length - 1].length < size
        ? res[res.length - 1].push(cur)
        : res.push([cur]),
      res
    ),
    [[]]
  );
};
const arr4 = [1, 2, 3, 4, 5, 6];
console.log(chunk(arr4, 3)); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// 字符统计
const countChar = (text) => {
  text = text.split("");
  return text.reduce((record, c) => {
    record[c] = (record[c] || 0) + 1;
    return record;
  }, {});
  //   return text.reduce(
  //     (record, c) => ((record[c] = (record[c] || 0) + 1), record),
  //     {}
  //   );
};

// 数组重复值统计
const countArray = (array) => {
  // 重复的值有哪些
  const obj = array.reduce((record, c) => {
    record[c] = (record[c] || 0) + 1;
    return record;
  }, {});
  let result = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (obj[key] > 1) {
        result.push(Number(key));
      }
    }
  }
  return result;

  // 每个重复值的次数
  // return array.reduce((record, c) => {
  //   record[c] = (record[c] || 0) + 1;
  //   return record;
  // }, {});
};

const text = "划水水摸鱼鱼";
console.log(countChar(text)); // { '划': 1, '水': 2, '摸': 1, '鱼': 2 }

console.log(countArray([0, 0, 1, 2, 4, 4, 3, 3, 1, 5, 3]));

console.log(totalizer([1, 2, 3, 4]));
console.log(toTridimensional([[], [1, 2, 3], [null, undefined, 1, NaN]]));
console.log(
  toFlattening([[1, 2, [null, undefined, 3]], ["a", "b"], [["a", ["b"]]]])
);
