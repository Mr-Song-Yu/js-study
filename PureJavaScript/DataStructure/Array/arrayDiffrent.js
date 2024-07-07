// 输出两个数组中不相同的元素
// 根据比较第一次出现的位置和最后一次出现的位置，来判断是否有重复项
const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = [0, 4, 6, 1, 3, 9];

arr1.concat(arr2).filter(function (v, i, arr) {
  return arr.indexOf(v) === arr.lastIndexOf(v);
});
