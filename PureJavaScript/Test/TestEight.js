function compose(...fn) {
  console.log(...fn);
  console.log(fn[0]);
  if (fn.length === 0) return (num) => num;
  if (fn.length === 1) return fn[0];
  return fn.reduce((pre, next, i) => {
    console.log(pre, next, i);
    return (num) => {
      console.log(num, "num");
      return next(pre(num));
    };
  });
}

function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+2+3+4=11
