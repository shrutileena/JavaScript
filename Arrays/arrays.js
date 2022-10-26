let groceries = ['apple', 'banana', 'peas', 'avocado']

// push
groceries.push('tea')

console.log(groceries)

// slice
console.log(groceries.slice(0,3))
console.log(groceries.slice(2,4))

// length
console.log(groceries.length)

// indexOf
console.log(groceries.indexOf('banana'))

// Array methods (Higher order functions) : map(), filter(), reduce()
// arguments of these methods are functions as well
// callback function

// map()
const nums = [1,2,3,4]
nums.map(number => console.log(number))
const result = nums.map(number => number * 2)
console.log(result)