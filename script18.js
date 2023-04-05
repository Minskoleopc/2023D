

// array 

let names = ["anil", "amol","ram","sham"]
let q1 = names.push("shirish")
console.log(names)
console.log(q1)

names = ["anil", "amol","ram","sham"]
let q2 = names.unshift("amit")
console.log(names)
console.log(q2)


names = [ 'amit', 'anil', 'amol', 'ram', 'sham' ]
let q3  = names.pop()
console.log(q3)
console.log(names)


let q4 = names.shift()
console.log(q4)
console.log(names)

names = [ 'anil', 'amol', 'ram' ]
let q5 = names.includes('amol')
console.log(q5)

names = [ 'anil', 'amol', 'ram' ]
let q6 = names.indexOf('anil')
console.log(q6)

// map() , filter() , reduce() , forEach()
// find() , findIndex() , every() , some()

let numbers = [11,22,33,44,55,66,77,88,99]

let q8 = numbers.map(function(el,index,arr){
    return el + 1
})
console.log(q8)

let q9 = numbers.filter(function(el,index,arr){
    return el > 40
})
console.log(q9)

let q10  = numbers.reduce(function(acc,el,index,arr){
    return acc + el // 33
},0)
console.log(q10)

numbers.forEach(function(el,index,arr){
    console.log(el * 2)
})



numbers = [11,22,33,44,55,66,77,88,99]

let q11 = numbers.find(function(el,index,arr){
     return el > 30
})
console.log(q11)

let q12 = numbers.findIndex(function(el,index,arr){
    return el > 30
})
console.log(q12)

let q13 = numbers.every(function(el,index,arr){
    return el > 20
})
console.log(q13)

let q14 = numbers.some(function(el,index,arr){
    return el > 200
})
console.log(q14)


let city = ["pune","banglore","chennai"]
q15 = city.reverse()
console.log(q15)
console.log(city)

q16 = city.sort()
console.log(q16)

let a = [11,22,33]
let b = [33,44,55]

let q17 = a.concat(b)
console.log(q17)

let q18 = b.concat(a)
console.log(q18)


let info = ["chinmay","deshpande",7709192441]
let q20 = info.join(' ')
console.log(q20)


let q21= info.at(2)
console.log(q21)


// slice() 
//                    0          1         2          3
let vegetables = ["brinjal","cabbage","cauliflower","carrot"]
//                  -4         -3             -2            -1

console.log(vegetables.slice(2))
console.log(vegetables.slice(-3))
console.log(vegetables.slice(1,-1))
console.log(vegetables.slice(-4,-1))
console.log(vegetables.slice(1,3))
console.log(vegetables.slice(-1,-3))

// splice()

//              0         1       2        3
let fruits = ["apple","grapes","papaya","chikoo"]

// fruits.pop()
// fruits.shift()

// fruits.splice(1,1)
// console.log(fruits)

// fruits.splice(1,2)
// console.log(fruits)

// fruits.splice(1,2,"tomato","mango")
// console.log(fruits)


// fill()
// let marks = [33,44,55,66,77,88,22,33,44,55,66,77,88]
// let q23 = marks.fill('99',2,5)
// console.log(q23)
