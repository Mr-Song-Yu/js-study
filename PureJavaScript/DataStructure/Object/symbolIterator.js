// 题目：使 var [a, b] = {a: 1, b: 2} 等式成立

// 方法一：
// Object.prototype[Symbol.iterator] = function() {
// 	return Object.values(this)[Symbol.iterator]()
// }

// 方法二：
Object.prototype[Symbol.iterator] = function*() {
	yield* Object.values(this);
}

var [a, b] = {a: 1, b: 2}

console.log('a:', a)
console.log('b:', b)
