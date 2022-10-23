// 浏览器环境 的setTimeout, MessageChannel是宏任务,  MessageChannel的执行时机比setTimeout要靠前，Promise和MutationObserver是微任务
// 常见的 宏任务 有 setTimeout、MessageChannel、postMessage、setImmediate。而常见的 微任务 有 MutationObsever 和 Promise.then。
/**
 * 执行顺序
 * 同步代码 > 异步代码
 * 异步任务中的宏任务（macrotask）和微任务（microtask）
 * 微任务 > 宏任务
 */
function asyncCallByMO(cb) {
  const div = document.createElement("div");
  let count = 0;
  const observer = new MutationObserver(() => {
    cb && typeof cb === "function" && cb.call(null);
  });

  observer.observe(div, { attributes: true });
  div.setAttribute("count", ++count);
}

function asyncCallByMC(cb) {
  const ch = new MessageChannel();
  ch.port1.onmessage = cb;
  ch.port2.postMessage(1);
}

setTimeout(() => {
  console.log(1);
}, 0);

new Promise((resolve) => {
  console.log(2);
  for (let i = 0; i < 100000; i++) {
    i === 99999 && resolve();
  }
  console.log(3);
}).then(() => {
  console.log(4);
});

console.log(5);

asyncCallByMC(() => {
  console.log(8);
});

asyncCallByMO(() => {
  console.log(6);
});

console.log(7);
