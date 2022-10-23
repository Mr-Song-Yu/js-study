function obovateSort(obj) {
  // 根据数组中的对象的 value，得到排序后的key，return key2-key1 表示降序
  var newkey = Object.keys(obj).sort(function (key1, key2) {
    return obj[key2].value - obj[key1].value;
  });
  // 用排序后的key构建新的对象数组
  // 创建一个新的对象，用于存放排好序的键值对
  var newObj = {};
  // 遍历newkey数组
  for (var i = 0; i < newkey.length; i++) {
    // 向新创建的对象中按照排好的顺序依次增加键值对
    newObj[newkey[i]] = obj[newkey[i]];
  }
  // 返回排好序的新对象
  return newObj;
}

function objKeySort(object) {
  iteratorKeys = object.keys(); // 得到所有 key
  let map = new TreeMap();
  while (iteratorKeys.hasNext()) {
    let key = iteratorKeys.next().toString();
    let value = object.optString(key);
    map.put(key, value);
  }
  itemData = new LinkedList(map.values());
}

var jason = {
  result: [
    {
      cid: 1,
      name: "aaa",
      price: 1000,
    },
    {
      cid: 2,
      name: "bbb",
      price: 150,
    },
    {
      cid: 3,
      name: "ccc",
      price: 200,
    },
    {
      cid: 4,
      name: "ddd",
      price: 1500,
    },
    {
      cid: 5,
      name: "eee",
      price: 1100,
    },
  ],
  totalCount: 5,
};

function sortJ(a, b) {
  return a.price - b.price;
}
var data = jason.result.sort(sortJ);

console.log(data);
