// 使用 var 全局声明变量 i，由于 JavaScript 事件循环，setTimeout 回调会在遍历结束后才执行
// 使用 let/const 块级声明变量 i 时，在每次的遍历过程中，都有一个 i 新值，并且每个值都在循环内的作用域
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
