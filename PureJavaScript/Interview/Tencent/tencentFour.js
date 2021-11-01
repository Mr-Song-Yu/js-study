// 给出两个整数 m,n, 请算出 在[m, n] 区间内能被整数 k 整除的数的个数，如[2,10]， k = 2, 返回 5, 即共有 2，4，6，8，10 五个数字
var arr = [2, 10];
var k = 2;
var sum = 0;
var arrMin = arr[0];
var arrMax = arr[1];
// 写法1
// for (let i = arrMin; i <= arrMax; i++) {
//   if (i % k == 0) {
//     sum++;
//   }
// }
// console.log(sum);
// 写法2 最大的数除k - 最小的数除k + 1 = 有几个数能整除k
sum = Math.trunc((arrMax - arrMin) / k) + 1;
console.log(sum);
