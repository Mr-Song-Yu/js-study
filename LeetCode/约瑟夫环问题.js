// 13个人围成一圈，从第一个人开始1、2、3顺序循环报数，凡数到3的人退出圈子，输出最后留在圈中的人的序号。
function josephus(n) {
  // 创建人员列表
  const people = Array.from({ length: n }, (_, i) => i + 1);

  // 初始化索引和报数计数器
  let index = 0;
  let count = 0;

  while (people.length > 1) {
    count++;
    // 报数到 3 时淘汰当前人员
    if (count === 3) {
      people.splice(index, 1);
      count = 0;
      // console.log(people);
    } else {
      index = (index + 1) % people.length;
      // console.log(index);
    }
  }

  return people[0];
}

// test
console.log(josephus(13));
// josephus(13);
