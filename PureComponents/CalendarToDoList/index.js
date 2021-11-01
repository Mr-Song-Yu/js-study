// 读取本地json文件数据
window.onload = function () {
  var url = "index.json";
  var request = new XMLHttpRequest();
  request.open("get", url);
  request.send(null);
  request.onload = function () {
    if (request.status == 200) {
      var json = JSON.parse(request.responseText);
      //console.log(json);
      var ol = document.getElementById("ol");
      json.person.map((person) => {
        var li = document.createElement("li");
        li.innerHTML = `名字是 ${person.name} 图片是 ${person.image}`;
        ol.append(li);
      });
    }
  };
};
// 原生Ajax
var Ajax = {
  get: function (url, fn) {
    // XMLHttpRequest对象用于在后台与服务器交换数据
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadystatechange = function () {
      // readyState == 4说明请求已完成
      if (xhr.readyState == 4) {
        if (xhr.status == 200 || xhr.status == 304) {
          console.log(xhr.responseText);
          fn.call(xhr.responseText);
        }
      }
    };
    xhr.send();
  },

  // data应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
  post: function (url, data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    // 添加http头，发送信息至服务器时内容编码类型
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200 || xhr.status == 304) {
          // console.log(xhr.responseText);
          fn.call(xhr.responseText);
        }
      }
    };
    xhr.send(data);
  },
};
// Ajax + Promise
const getJSON = function (url) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });
  return promise;
};
getJSON("promise.json").then(
  function (json) {
    console.log("Data: ", json);
  },
  function (error) {
    console.error("err", error);
  }
);
// jQuery Ajax => $ajax
$.ajax({
  url: "",
  type: "",
  dataType: "",
  data: {},
  success: function () {},
  error: function () {},
});
