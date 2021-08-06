//@ 栈的应用--括号匹配
var isValid = function (s) {
  let map = {
    "(": -1,
    ")": 1,
    "[": -2,
    "]": 2,
    "{": -3,
    "}": 3,
  };

  //* 利用数组模拟栈结构
  let stack = [];

  //* 去除字符串中的字母和特殊字符后的数组
  let arr = [];

  //* 去掉无用符号，利用正则表达式
  let newStr = s.replace(/\t|\r|\n|\s|\f|\"|\u|\*|\\|\$/gi, "");

  //* 删除字符串内的字母
  for (const i of newStr) {
    if (i < "a" || i > "z") {
      arr.push(i);
    }
  }
  s = arr;

  //* 根据map将括号进行匹配，匹配成功进栈，失败出栈并返回false
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < 0) {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (map[last] + map[s[i]] != 0) {
        return false;
      }
    }
  }

  //* 站内还有未匹配的括号则返回 false
  if (stack.length > 0) {
    return false;
  }

  return true;
};
//@ 测试
console.log(isValid("[(dgy{$dg***}h**f)]")); // true
console.log(isValid("[(dgy{$dg**}hf])]")); // false
