// 深拷贝
const deepClone = (data) => {
  if (typeof data !== "object" || data === null) {
    return data;
  }
  let result = Array.isArray(data) ? [] : {};
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      result[key] = deepClone(data[key]);
    }
  }
  return result;
};

//函数拷贝
const copyObj = (obj = {}) => {
  //变量先置空
  let newborn = null;

  //判断是否需要继续进行递归
  if (typeof obj == "object" && obj !== null) {
    newborn = obj instanceof Array ? [] : {};
    //进行下一层递归克隆
    for (let i in obj) {
      newborn[i] = copyObj(obj[i]);
    }
    //如果不是对象直接赋值
  } else {
    newborn = obj;
  }

  return newborn;
};

//模拟对象
let obj = {
  numberParams: 1,
  functionParams: () => {
    console.log("昨天基金全是绿的，只有我的眼睛是红的");
  },
  objParams: {
    a: 1,
    b: 2,
  },
};

const newObj = copyObj(obj); //这样就完成了一个对象的递归拷贝
obj.numberParams = 100; //更改第一个对象的指
console.log(newObj.numberParams); //输出依然是1 不会跟随obj去改变
