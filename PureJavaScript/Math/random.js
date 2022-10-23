/**
 * @param {*} lowerValue
 * @param {*} upperValue
 * @returns 返回指定区间的随机数
 */
const selectFrom = (lowerValue, upperValue) => {
  let choose = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choose + lowerValue);
};

console.log(selectFrom(2, 10));
