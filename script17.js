
// push() , unshift(), shift() , pop() , includes()
// map() , filter() , reduce() , forEach() , findIndex(),find() , every(),some()



//              0         1       2     3       4   

let names = ["chinmay","poorva","ram","sham","satish"]
let rnames = names.reverse()
console.log(rnames)
console.log(names)

let sortedArray = names.sort()
console.log(sortedArray)


let numB = [11,22,33]
let numC = [44,55,66]

let q1 = numB.concat(numC)
let q2 = numC.concat(numB)
console.log(q1)
console.log(q2)


let info = ["chinmay","deshpande",7709192441]
let q3 = info.join('-')
let q4 = info.join('@-')
let q5 = info.join(' ')
let q6 = info.join('')
console.log(q3)
console.log(q4)
console.log(q5)
console.log(q6)

//              0         1      2       3         4       5
let fruits = ["apple","mango","banana","orange","papaya","chikoo"]
//              -6       -5     -4        -3        -2       -1

console.log(fruits[0])
let q7 = fruits.indexOf("banana")
let q8 = fruits.indexOf("banana2")
console.log(q8)

let q9 = fruits.slice(2)
let q10 = fruits.slice(-5)
let q11 = fruits.slice(-5,4)
let q12 = fruits.slice(1,5)
let q13 = fruits.slice(1,-1)
let q14 = fruits.slice(-1,-4)

console.log(q9)
console.log(q10)
console.log(q11)
console.log(q12)
console.log(q13)
console.log(q14)

//                   0           1           2         3
let vegetables = ["cabbage","cauliflower","brinjal","tomato"]

//vegetables.splice(startIndex,numberOfElementsTobeDeleted)
vegetables.splice(1,2)
console.log(vegetables)



