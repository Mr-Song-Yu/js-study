// 实现Promise，遵循Promise/A+规范
function Promise(executor) {
  var self = this;
  self.status = "pending";
  self.value = undefined;
  self.reason = undefined;
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];

  function resolve(value) {
    if (self.status === "pending") {
      self.status = "resolved";
      self.value = value;
      self.onResolvedCallbacks.forEach(function (callback) {
        callback();
      });
    }
  }

  function reject(reason) {
    if (self.status === "pending") {
      self.status = "rejected";
      self.reason = reason;
      self.onRejectedCallbacks.forEach(function (callback) {
        callback();
      });
    }
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  var self = this;
  var promise2;
  onFulfilled =
    typeof onFulfilled === "function"
      ? onFulfilled
      : function (value) {
          return value;
        };
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : function (err) {
          throw err;
        };

  if (self.status === "resolved") {
    return (promise2 = new Promise(function (resolve, reject) {
      try {
        var x = onFulfilled(self.value);
        resolvePromise(promise2, x, resolve, reject);
      } catch (e) {
        reject(e);
      }
    }));
  }

  if (self.status === "rejected") {
    return (promise2 = new Promise(function (resolve, reject) {
      try {
        var x = onRejected(self.reason);
        resolvePromise(promise2, x, resolve, reject);
      } catch (e) {
        reject(e);
      }
    }));
  }

  if (self.status === "pending") {
    return (promise2 = new Promise(function (resolve, reject) {
      self.onResolvedCallbacks.push(function () {
        try {
          var x = onFulfilled(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      self.onRejectedCallbacks.push(function () {
        try {
          var x = onRejected(self.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }));
  }
};

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  var called;
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      var then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          function (y) {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          function (err) {
            if (called) return;
            called = true;
            reject(err);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

Promise.deferred = Promise.defer = function () {
  var dfd = {};
  dfd.promise = new Promise(function (resolve, reject) {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

module.exports = Promise;
