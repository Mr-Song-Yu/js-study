// 实现 new
function myNew(constructorFn, ...args) {
  // 创建一个新的对象，并将其原型指向构造函数的原型
  const obj = Object.create(constructorFn.prototype);

  // 调用构造函数，并将其上下文设置为新创建的对象
  const result = constructorFn.apply(obj, args);

  // 如果构造函数返回一个对象，则返回该对象，否则返回新创建的对象
  if (typeof result === "object" && result !== null) {
    return result;
  }
  return obj;
}

// 示例使用
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = myNew(Person, "John", 30);

console.log(person.name); // 输出: "John"
console.log(person.age); // 输出: 30
