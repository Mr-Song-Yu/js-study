// 实现一个字符串的模板引擎方法：template(str, obj) ，将 str 中的变量替换后返回目标字符串
// 例如：template("${name}你好,欢迎来到${company}", {name: '张三', company: '腾讯'})
// 结果为："张三你好,欢迎来到腾讯"
const str = "${name}你好,欢迎来到${company}";
const obj = {
  name: "张三",
  company: "腾讯",
};
var newStr = "";
function template(str, obj) {
  // 两行搞定
  // let res = str.match(/\$\{[a-z|A-Z|0-9]+\}/g);
  // res.forEach(v => { str = str.replace(/\$\{[a-z|A-Z|0-9]+\}/, obj[v.match(/[a-z|A-Z|0-9]+/)[0]]) });
  // 一行搞定
  str = str.replace(/\$\{\s*(\w+)\s*\}/g, (match, key) => obj[key]);
  console.log(str);
}
template(str, obj);
