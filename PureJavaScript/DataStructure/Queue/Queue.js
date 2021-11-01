"use strict";

//@ 单链队列的实现
class Queue {
  constructor() {
    this.queue = [];
  }

  //* 入队列
  enQueue(item) {
    this.queue.push(item);
  }

  //* 出队列
  deQueue() {
    return this.queue.shift();
  }

  //* 获取队头
  getHeader() {
    return this.queue[0];
  }

  //* 获取队列长度
  getLength() {
    return this.queue.length;
  }

  //* 检测是否为空队列
  isEmpty() {
    return this.getLength() === 0;
  }
}

//@ 循环队列的实现
class SqQueue {
  constructor(length) {
    this.queue = new Array(length + 1);
    //* 队头
    this.first = 0;
    //* 队尾
    this.last = 0;
    //* 当前队列大小
    this.size = 0;
  }

  //* 入队列
  enQueue(item) {
    /**
     * *队列判满的条件：this.first === (this.last + 1) % this.queue.length
     * *如果队列为满就代表需要扩容数组
     * *this.queue.length 是防止数组越界
     */
    if (this.first === (this.last + 1) % this.queue.length) {
      this.resize(this.getLength() * 2 + 1);
    }
    this.queue[this.last] = item;
    this.size++;
    this.last = (this.last + 1) % this.queue.length;
  }

  //* 出队列
  deQueue() {
    if (this.isEmpty()) {
      throw Error("Queue is empty");
    }
    let r = this.queue[this.first];
    this.queue[this.first] = null;
    this.first = (this.first + 1) % this.queue.length;
    this.size--;
    /**
     * *判断当前队列大小是否过小
     * *为了保证不浪费空间，在队列空间等于总长度四分之一时且不为 2 时缩小总长度为当前的一半
     */
    if (this.size === this.getLength() / 4 && this.getLength() / 2 !== 0) {
      this.resize(this.getLength() / 2);
    }
    return r;
  }

  //* 获取队头
  getHeader() {
    if (this.isEmpty()) {
      throw Error("Queue is empty");
    }
    return this.queue[this.first];
  }

  //* 获取队列长度
  getLength() {
    return this.queue.length - 1;
  }

  //* 检测是否为空队列
  isEmpty() {
    return this.first === this.last;
  }

  resize(length) {
    let q = new Array(length);
    for (let i = 0; i < length; i++) {
      q[i] = this.queue[(i + this.first) % this.queue.length];
    }
    this.queue = q;
    this.first = 0;
    this.last = this.size;
  }
}
