/**
 * 获取数据类型
 * @param {*} obj
 */
const getTypeByObj = (obj) => {
  return Object.prototype.toString
    .call(obj)
    .match(/^\[object ([a-zA-Z]*)\]$/)[1];
};

/**
 * 判断是否是空对象
 * @param {*} obj
 */
const isEmptyObject = (obj) => {
  for (var key in obj) {
    return false;
  }
  return true;
};

/**
 * 比较两个json（新json与老json）的不同,并返回不同时的旧值(old_val)和新值(new_val)
 * @param {*} json1 老json
 * @param {*} json2 新json
 */
const objectDiff = (json1, json2) => {
  if (!json1 || isEmptyObject(json1) || !json2 || isEmptyObject(json2)) {
    return null;
  }
  let diffRes = {
    old_val: {},
    new_val: {},
  };
  for (let k in json2) {
    // 判断数据类型是否一致
    if (getTypeByObj(json2[k]) === getTypeByObj(json1[k])) {
      // 比较 “Array”和“Object”类型
      if (
        getTypeByObj(json2[k]) === "Array" ||
        getTypeByObj(json2[k]) === "Object"
      ) {
        const diffData = objectDiff(json1[k], json2[k]);
        if (!isEmptyObject(diffData)) {
          diffRes.old_val[k] = diffData.old_val;
          diffRes.new_val[k] = diffData.new_val;
        }
      } else if (json1[k] !== json2[k]) {
        // 比较其他类型数据
        diffRes.old_val[k] = json1[k];
        diffRes.new_val[k] = json2[k];
      }
    } else {
      diffRes.old_val[k] = json1[k];
      diffRes.new_val[k] = json2[k];
    }
  }
  // 若没有变化，返回null
  if (isEmptyObject(diffRes.old_val) || isEmptyObject(diffRes.new_val)) {
    return null;
  }
  return diffRes;
};

let obj1 = {
  name: "jack",
  age: 18,
  title: "这是标题",
  lv2: {
    tip: "这是二层提示",
    lv3: {
      noC: "noC",
      msg: "这是三层msg",
    },
  },
};
let obj2 = {
  name: "jack",
  age: 188,
  title: "这是标题1",
  lv2: {
    tip: "这是二层提示",
    lv3: {
      noC: "noC",
      msg: "这是三层msg1",
    },
  },
  no: "这是obj1没有的",
};
console.log(objectDiff(obj1, obj2));
/**
    {
      "old_val": {
        "age": 18,
        "title": "这是标题",
        "lv2": {
          "lv3": {
            "msg": "这是三层msg"
          }
        }
      },
      "new_val": {
        "age": 188,
        "title":
          "这是标题1",
        "lv2":
        {
          "lv3":
            { "msg": "这是三层msg1" }
        },
        "no": "这是obj1没有的"
      }
    }
  */
