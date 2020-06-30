/**
 * @description :通过js内置的 “内部属性 -- [[class]]” 准确判断js对象所属类型，比typeof 和 instanceof 要更加准确
 * @param {any} arg :需要判断类型的对象
 * @returns {String} :返回对象数据类型的字符串描述
 * More link: https://www.cnblogs.com/libin-1/p/5902070.html
 */
function classOf (arg) {
  return Object.prototype.toString.call(arg).slice(8,-1)
}

let a = classOf('this is string')    // String
let b = classOf(99)                  // Number
let c = classOf([1,2,3])             // Array

console.group('利用顶级原型自身的toString方法将对象内置的内部对象属性实现：')
console.log(a)
console.log(b)
console.log(c)
console.groupEnd()

// typeof 方法无法区分null、array、object三种数据类型，都返回object
console.group('利用typeof方法可以判断js的基本数据类型：')
console.log(typeof 99)  // Number
console.log(typeof 'Hello world') // String
console.log(typeof true)  // Boolean
console.log(typeof undefined) // undefined
console.log(typeof null)  // object
console.log(typeof [1,2,3]) // object
console.log(typeof function(){})  // function
console.log(typeof {})  // object
console.groupEnd()

////////////////////---方案三：利用instanceof弥补不能区分应用类型数据的问题---//////////////////
console.log([1,2,3] instanceof Array)
console.log({} instanceof Object)
