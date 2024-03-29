function structuralClone(obj) {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel();
    port2.onmessage = (ev) => resolve(ev.data);
    port1.postMessage(obj);
  });
}

let obj = {
  a: 1,
  b: {},
};
obj.b.c = obj.b;
// 注意该方法是异步的
// 可以处理 undefined 和循环引用对象
(async () => {
  const clone = await structuralClone(obj);
  console.log(clone, clone.b.c, "structuralClone");
})();
