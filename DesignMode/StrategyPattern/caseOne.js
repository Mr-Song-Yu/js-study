// 使用策略模式可以减少 if...else、switch 的使用
// 这是一个发放工资的案例
// 利用对象的属性调用来实现策略模式
const obj = {
  A: (salary) => {
    return salary * 4;
  },
  B: (salary) => {
    return salary * 3;
  },
  C: (salary) => {
    return salary * 2;
  },
};

const calculateBonus = (salary, level) => {
  return obj[level](salary);
};

console.log(calculateBonus(4000, "A")); // 16000
console.log(calculateBonus(2500, "B")); // 7500
