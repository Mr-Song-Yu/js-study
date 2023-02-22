// 定义 Promise 状态常量
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// Promise 构造函数
function PromiseAplus(executor) {
  // 初始化 Promise 状态为 pending
  this.state = PENDING;
  // 初始化 Promise 成功值和失败原因为 undefined
  this.value = undefined;
  this.reason = undefined;
  // 初始化 Promise onFulfilled 和 onRejected 回调数组
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  // resolve 函数，用于将 Promise 状态改为 fulfilled，并执行 onFulfilled 回调函数
  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      // 执行所有 onFulfilled 回调函数
      this.onFulfilledCallbacks.forEach((callback) => callback());
    }
  };

  // reject 函数，用于将 Promise 状态改为 rejected，并执行 onRejected 回调函数
  const reject = (reason) => {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
      // 执行所有 onRejected 回调函数
      this.onRejectedCallbacks.forEach((callback) => callback());
    }
  };

  // 调用 executor 函数，并传入 resolve 和 reject 函数
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

// then 方法，用于添加 onFulfilled 和 onRejected 回调函数，并返回一个新的 Promise 对象
PromiseAplus.prototype.then = function (onFulfilled, onRejected) {
  // 如果 onFulfilled 或 onRejected 不是函数，则忽略它们
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : (value) => value;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (reason) => {
          throw reason;
        };

  // 创建一个新的 Promise 对象
  const promise2 = new PromiseAplus((resolve, reject) => {
    if (this.state === FULFILLED) {
      // 如果 Promise 已经 fulfilled，则在下一个 tick 执行 onFulfilled 回调函数
      setTimeout(() => {
        try {
          const x = onFulfilled(this.value);
          // 调用 resolvePromise 函数来解析新 Promise 对象的状态
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    } else if (this.state === REJECTED) {
      // 如果 Promise 已经 rejected，则在下一个 tick 执行 onRejected 回调函数
      setTimeout(() => {
        try {
          const x = onRejected(this.reason);
          // 调用 resolvePromise 函数来解析新 Promise 对象的状态
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    } else {
      // 如果 Promise 还未 fulfilled 或 rejected，则将 onFulfilled 和 onRejected 回调函数添加到数组中
      this.onFulfilledCallbacks.push(() => {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            // 调用 resolvePromise 函数来解析新 Promise 对象的状态
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      });

      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            // 调用 resolvePromise 函数来解析新 Promise 对象的状态
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      });
    }
  });

  return promise2;
};

PromiseAplus.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

// resolvePromise 函数，用于解析新 Promise 对象的状态
function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    // 如果 promise 和 x 是同一个对象，则抛出 TypeError 错误
    reject(new TypeError("Circular reference detected"));
    return;
  }

  let called = false;

  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      // 如果 x 是一个 Promise 对象，则调用它的 then 方法，将新 Promise 对象的状态设置为 x 的状态
      const then = x.then;

      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
}

// 导出 PromiseAplus 类
module.exports = PromiseAplus;
