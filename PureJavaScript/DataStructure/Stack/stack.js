"use strict";

//@ 利用数组方法特性，根据栈只能在某一端添加或删除数据也就是先进后出原则实现栈
class Stack {
  constructor() {
    this.stack = [];
  }
  //* 数据进栈
  push(item) {
    this.stack.push(item);
  }
  //* 数据出栈
  pop() {
    this.stack.pop();
  }
  //* 返回栈尾数据
  peek() {
    return this.stack[this.getCount() - 1];
  }
  //* 返回栈的长度
  getCount() {
    return this.stack.length;
  }
  //* 是否为空栈
  isEmpty() {
    return this.getCount() === 0;
  }
}
