//用原生js实现一个日历
var calendar = function (id, year, month) {
  //获取元素
  var calendar = document.getElementById(id);
  //获取年份
  var year = document.getElementById(year);
  //获取月份
  var month = document.getElementById(month);
  //定义月份
  var monthData = [
    ["一月", "31"],
    ["二月", "28"],
    ["三月", "31"],
    ["四月", "30"],
    ["五月", "31"],
    ["六月", "30"],
    ["七月", "31"],
    ["八月", "31"],
    ["九月", "30"],
    ["十月", "31"],
    ["十一月", "30"],
    ["十二月", "31"],
  ];
  //定义星期
  var weekData = ["日", "一", "二", "三", "四", "五", "六"];
  //定义日期
  var dateData = [];
  //获取当前年份
  var nowYear = new Date().getFullYear();
  //获取当前月份
  var nowMonth = new Date().getMonth();
  //获取当前日期
  var nowDate = new Date().getDate();
  //获取当前星期
  var nowWeek = new Date().getDay();

  //定义函数
  var init = function () {
    //循环添加年份
    for (var i = 2000; i <= 2050; i++) {
      var option = document.createElement("option");
      option.innerHTML = i;
      option.setAttribute("value", i);
      if (i == nowYear) {
        option.setAttribute("selected", "selected");
      }
      year.appendChild(option);
    }
    //循环添加月份
    for (var i = 0; i < monthData.length; i++) {
      var option = document.createElement("option");
      option.innerHTML = monthData[i][0];
      option.setAttribute("value", i);
      if (i == nowMonth) {
        option.setAttribute("selected", "selected");
      }
      month.appendChild(option);
    }
    //循环添加日期
    for (var i = 0; i < weekData.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = weekData[i];
      calendar.appendChild(li);
    }
    //调用月份函数
    monthChange(nowYear, nowMonth);
  };

  //定义函数
  var monthChange = function (year, month) {
    //清空日期
    dateData = [];
    //获取星期
    var week = new Date(year, month).getDay();
    //获取上个月天数
    var lastMonthDays =
      monthData[month - 1 < 0 ? monthData.length - 1 : month - 1][1];
    //获取当月天数
    var nowMonthDays = monthData[month][1];
    //判断是否是闰年
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      monthData[1][1] = 29;
    } else {
      monthData[1][1] = 28;
    }
    //循环添加日期
    for (var i = 0; i < 42; i++) {
      var li = document.createElement("li");
      if (i < week) {
        li.innerHTML = lastMonthDays - week + i + 1;
        li.className = "last";
      } else if (i >= week && i < parseInt(nowMonthDays) + parseInt(week)) {
        li.innerHTML = i - week + 1;
        if (nowYear == year && nowMonth == month && li.innerHTML == nowDate) {
          li.className = "now";
        }
      } else {
        li.innerHTML = i - week - nowMonthDays + 1;
        li.className = "next";
      }
      dateData.push(li);
    }
    //循环添加日期
    for (var i = 0; i < dateData.length; i++) {
      calendar.appendChild(dateData[i]);
    }
  };

  //调用函数
  init();

  //绑定事件
  year.onchange = function () {
    //清空日期
    calendar.innerHTML = "";
    //调用月份函数
    monthChange(this.value, month.value);
  };
  //绑定事件
  month.onchange = function () {
    //清空日期
    calendar.innerHTML = "";
    //调用月份函数
    monthChange(year.value, this.value);
  };
};
