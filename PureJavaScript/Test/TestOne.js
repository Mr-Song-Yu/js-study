"use strict";
var a = 10;
console.log(a);
{
  console.log(a);
  a = 99;
  console.log(a);
  function a() {}
  console.log(a);
  a = 30;
  console.log(a);
}
console.log(a);
console.log(typeof null);
