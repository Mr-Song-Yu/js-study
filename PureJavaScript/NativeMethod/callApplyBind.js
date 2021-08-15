// 实现 call() 方法
Function.prototype.myCall = function (context) {
  if (context == null) {
    context = window;
  }
  context.fn = this;
  const arg = [...arguments].slice(1);
  const ret = context.fn(...arg);
  delete context.fn;
  return ret;
};

// 实现 apply() 方法
Function.prototype.myApply = function (context, array) {
  if ((context = null)) {
    context = window;
  }
  context.fn = this;
  let ret;
  if (array == null) {
    ret = context.fn();
  } else {
    ret = context.fn(...array);
  }
  delete context.fn;
  return ret;
};

// 实现 bind() 方法
Function.prototype.myBind = function (context) {
  if (context == null) {
    context = window;
  }
  const arg = [...arguments].slice(1);
  const _this = this;
  return function F() {
    if (this instanceof F) {
      return _this.call(this, ...arg);
    }
    return _this.call(context, ...arg);
  };
};

// 实现 new
function create() {
  // 创建一个空的对象
  let obj = new Object();
  // 获得构造函数
  let Con = [].shift.call(arguments);
  // 链接到原型
  obj.__proto__ = Con.prototype;
  // 绑定 this，执行构造函数
  let result = Con.apply(obj, arguments);
  // 确保 new 出来的是个对象
  return typeof result === "object" ? result : obj;
}
