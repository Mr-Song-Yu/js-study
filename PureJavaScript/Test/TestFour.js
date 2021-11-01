var str = "aabbbbbbcdeeef";
var x = 0;
var y = "";
for (var i = 0; i < str.length; i++) {
  if (str[i] == y[y.length - 1]) {
    x++;
  } else {
    if (x > 0) {
      y += x + 1;
      x = 0;
    }
    y += str[i];
  }
}
console.log(y);
