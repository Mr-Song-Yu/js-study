// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// 以下代码运行的结果是什么？
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// 以下代码运行的结果是什么？
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let someDate = new Date(Date.parse("May 23, 2019"));
// GMT 时间2000 年1 月1 日零点
// let y2k = new Date(Date.UTC(2000, 0));
// GMT 时间2005 年5 月5 日下午5 点55 分55 秒
// let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

// console.log(someDate);
// console.log(y2k.toLocaleString());
// console.log(allFives);

const type = "3";
const value = true;
if (value && (type == "2" || type == "3")) {
  console.log("成功执行");
}
