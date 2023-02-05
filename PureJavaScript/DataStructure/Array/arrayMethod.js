"use strict";
const arr = [1, 2, 3, 100000000, "hello", "world"];

/**
 * @ toString()
 * @input => null
 * @output => String
 * 返回一个包含数组中所有元素的字符串，每个元素通过逗号分隔。
 */
const str = arr.toString(); // "1,2,3,100000000,hello,world"
str instanceof String; // false
Object.prototype.toString.call(str); // [object String]

/**
 * @ toLocaleString()
 * @input => null
 * @output => String
 * * toString()和toLocaleString()两点区别：
 * * 1.当数字是四位数及以上时，有区别。
 * * 2.当目标是标准时间格式时，有区别。
 * 根据宿主环境的区域设置，返回一个包含数组中所有元素的字符串，每个元素通过逗号分隔。
 */
const localeStr = arr.toLocaleString(); // "1,2,3,100,000,000,hello,world"
const today = new Date(); // 2020-12-15T07:51:28.990Z : [object Date]
const toDate = today.toString(); // "Tue Dec 15 2020 15:53:08 GMT+0800 (GMT+08:00)"
const locale = today.toLocaleString(); // "2020-12-15 3:51:28 ├F10: PM┤" // "2020/12/15 下午3:51:28"
// toLocaleString() 拆分为两段
const localeDate = today.toLocaleDateString(); // "2020-12-15"
const localeTime = today.toLocaleTimeString(); // "4:04:20 ├F10: PM┤"  // 下午4:04:20

/**
 * @ concat()
 * @input => Array
 * @output => Array
 * * concat(item1[, item2[, ...[, itemN]]])
 * 返回一个数组，这个数组包含原先数组和 item1、item2、……、itemN 中的所有元素，在原数组尾部插入，不改变原数组，解构输入的第一层数组。
 */
const concatArr = arr.concat(999, [1, 2, 545, [888, 999, ["abcdef", 567]]]); // [1,2,3,100000000,'hello','world',999,1,2,545,[888,999,['abcdef',567]]]

/**
 * @ join()
 * @input => 分隔标志（可以是符号、数字、字符串）
 * @output => String
 * * join(sep)
 * 返回一个包含数组中所有元素的字符串，每个元素通过指定的 sep 分隔，默认为逗号。
 */
const joinArr = arr.join("\\"); // "1\2\3\100000000\hello\world"

/**
 * @ pop()
 * @input => null
 * @output => String | Number
 * 删除并返回数组中的最后一个元素（会更改原数组）
 */
const popArr = arr.pop(); // "world"

/**
 * @ push()
 * @input => Array | Object | Number | String
 * @output => Number => arr.length
 * * push(item1, ..., itemN)
 * 将 item1、item2、……、itemN 追加至原数组（会更改原数组）
 */
const pushArr = arr.push("world"); // 6

/**
 * @ reverse()
 * @input => null
 * @output => Array
 * 根据索引 index 进行数组逆序（会更改原数组）
 */
// arr: [ 1, 2, 3, 100000000, 'hello', 'world' ]
const reverseArr = arr.reverse(); // [ 'world', 'hello', 100000000, 3, 2, 1 ]

/**
 * @ shift()
 * @input => null
 * @output => String | Number
 * 删除并返回数组中第一个元素（会更改原数组）
 */
// arr: [ 'world', 'hello', 100000000, 3, 2, 1 ]
const shiftArr = arr.shift(); // "world"

/**
 * @ slice()
 * @input => Number
 * @output => Array
 * * slice(start, end)
 * 返回子数组，以 arr[start] 开头，以 arr[end] 前一个元素结尾。
 * slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
 */
// arr: [ 'hello', 100000000, 3, 2, 1 ]
const sliceArr1 = arr.slice(2); // [ 3, 2, 1 ]
const sliceArr2 = arr.slice(2, 4); // [ 3, 2 ]

/**
 * @ sort()
 * @input => null | Function
 * @output => Array
 * * sort([cmpfn])
 * 依据可选的比较函数 cmpfn 进行排序，如果未指定比较函数，则按字符顺序比较（即使被比较元素是数字,会更改原数组）。
 */
// arr: [ 'hello', 100000000, 3, 2, 1 ]
const sortArr1 = arr.sort(); // [ 1, 100000000, 2, 3, 'hello' ]
// 数字大小比较
function sortNumber(a, b) {
  return a - b;
}
const sortArr2 = arr.sort(sortNumber); // [ 1, 2, 3, 100000000, 'hello' ]

/**
 * @ splice()
 * @input => Number | Array
 * @output => Array
 * * splice(start, delcount[, item1[, ...[, itemN]]])
 * 从 start 开始，删除 delcount 个元素，然后插入所有的 item，会更改原数组。
 * splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
 */
// arr: [ 1, 2, 3, 100000000, 'hello' ]
const spliceArr = arr.splice(1, 2, 3, [7, 8, 9]); // [ 2, 3 ]
// arr: [ 1, 3, [ 7, 8, 9 ], 100000000, 'hello' ]

/**
 * @ unshift()
 * @input => Array | Number | String
 * @output => Number
 * * unshift(item1[, item2[, ...[, itemN]]])
 * 将 item 插入数组头部，返回数组新长度（考虑 undefined），不会像concat一样解构第一层数组，会更改原数组。
 */
// arr: [ 1, 3, [ 7, 8, 9 ], 100000000, 'hello' ]
const unshiftArr = arr.unshift(7, 8, 9, [1, 2, 3, 4, 5, [7, 8, 9]]); // 9 => arr.length
// arr: [ 7, 8, 9, [ 1, 2, 3, 4, 5, [ 7, 8, 9 ] ], 1, 3, [ 7, 8, 9 ], 100000000, 'hello' ]
