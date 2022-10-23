/**
 * 密码类随机数
 */
let array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
