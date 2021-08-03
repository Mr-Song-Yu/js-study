"use strict";
const vals = ["foo", "bar", 42, "baz", NaN];

/**
 * 查询数组中是否存在某个值的几种方法：
 * @indexOf
 * @~indexOf
 * @includes
 * Array.includes(..) 使用的匹配逻辑能够找到 NaN 值
 */
if (vals.indexOf(42) >= 0) {
  // 找到了！
  console.log(vals.indexOf(42) >= 0); // true
}

if (~vals.indexOf(42)) {
  // 找到了！
  console.log(~vals.indexOf(42)); // -3
}

if (vals.includes(42)) {
  // 找到了！
  console.log(vals.includes(42)); // true
}

if (vals.includes(NaN)) {
  // 找到了！
  console.log(vals.includes(NaN)); // true
}
