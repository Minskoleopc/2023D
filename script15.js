// push()
// pop()
// shift()
// unshift()
// includes()

//                0     1    2    3
let birthYear = [1989,1990,1991,1992]
// [34,33,32,31]
let q1 = birthYear.map(function(el,index,arr){
    return 2023 - el
})
console.log(q1)

let numbers = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]

let q2 = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(q2)


// program 2
let marks = [55,53,78,66,77,89,62]
// [78,66,77,89,62]
let q3= marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q3)

// program3 
let numB = [11,22,33] // 66
let q4 = numB.reduce(function(acc,el,index,arr){
    return acc + el // 66
},0)
console.log(q4)

// program4
//              0          1       2         3       4
let names = ["chinmay","sarika","abhisha","mayuri","satish"]
let q6 = names.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
console.log(q6)

// program 5

let numC = [55,66,77,333,44222,44,555,666]
//[333,42222,555,666]
let q7 = numC.filter(function(el,index,arr){
    return el > 100
})
console.log(q7)

let q8 = numC.find(function(el,index,arr){
    return el > 100
})
console.log(q8)

let q9 = numC.findIndex(function(el,index,arr){
    return el > 100
})
console.log(q9)


let numD = [11,22,33,44,55,-77]
let q10 = numD.every(function(el,index,arr){
    return el > 0
})
console.log(q10)

let numE = [11,22,33,44,55]
let q11 = numE.some(function(el,index,arr){
    return el < 0
})
console.log(q11)









