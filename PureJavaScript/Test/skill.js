// 1、实现原生的 AJAX 请求
const ajax = {
  get(url, fn) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        fn(xhr, responseText);
      }
    };
    xhr.send();
  },
  post(url, data, fn) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        fn(xhr, responseText);
      }
    };
    xhr.send(data);
  },
};

// 2、手写 new
function myNew(fn, ...args) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj, args);
  return obj;
}
