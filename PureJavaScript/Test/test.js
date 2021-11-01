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
