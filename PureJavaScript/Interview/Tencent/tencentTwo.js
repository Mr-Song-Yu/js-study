// 实现一个函数a，奇数次调用时输出1，偶数次调用时输出2，不能使用外部变量。
let fn = (function () {
  let n = 0;
  return () => {
    n++;
    // console.log(n%2==0 ? 2:1);
    return n % 2 == 0 ? 2 : 1;
  };
})();
