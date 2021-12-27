// js处理数字显示成科学计数法的问题
const numberToNonExponential = (num) => {
  let m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
  return num.toFixed(Math.max(0, (m[1] || "").length - m[2]));
};
