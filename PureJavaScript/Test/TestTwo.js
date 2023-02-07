var foo = 1;
function bar() {
  foo = 10;
  return;
  function foo() {}
}
bar();
// alert(foo);
console.log(foo);

async function async1() {
  console.log(2);
  await async2();
  console.log(6);
}

async function async2() {
  console.log(3);
}

console.log(1);

setTimeout(() => {
  console.log(8);
}, 0);

async1();

new Promise(function (resolve) {
  console.log(4);
  resolve();
}).then(function () {
  console.log(7);
});

console.log(5);

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
