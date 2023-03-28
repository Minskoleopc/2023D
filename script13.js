
// //              0         1        2       3
// let names = ["chinmay","sarika","poorva","ram"]

// // console.log(names[0])
// // console.log(names[1])

// for(let i = 0 ; i < names.length ; i++){
//     //console.log(i)
//     console.log(names[i])
// }


// // program 1
// //                0     1   2    3
// let birthYear = [1989,1990,1991,1992]
// let ages = [] // [34,33]
// // [34,33,32,31]
// for(let i = 0 ; i < birthYear.length ; i++){
//    // console.log(i)
//    //console.log(birthYear[i])
//    console.log(2023-birthYear[i])
//    let a = 2023-birthYear[i]
//    ages.push(a)
// }
// console.log(ages)


// // program 2

// //           0  1  2  3  4  5  6  7  8  9  10
// let marks = [11,22,33,44,22,44,55,66,70,80,90]
// let above40 = []
// //[44,44,55,66,70,80,90]

// for(let i = 0 ; i < marks.length ; i++){
//     console.log(i)
//     console.log(marks[i])

//     if(marks[i] > 40){
//         above40.push(marks[i])
//     }
// }
// console.log(above40)

// // program 3

// let numbers = [11,22,33] // 66
// let total = 0
// for(let i = 0 ; i < numbers.length ; i++){
//     //console.log(numbers[i])
//     total = total + numbers[i]
//     //       0    +    11         =====> 11
//     //       11   +    22         =====> 33
//     //       33   +    33         =====> 66
// }
// console.log(total)


// // program 4
// //             0        1         2         3
// let cities = ["pune","mumbai","banglore","kolkata"]

// for(let i = 0 ; i < cities.length ; i++){
//     // console.log(i)
//     // console.log(city[i])
//     console.log("welcome "+ cities[i])
// }


// // push()

// let vegetable = ["cabbage","cauliflower","brinjal"]
// let t1 = vegetable.push("carrot")
// console.log(t1)
// console.log(vegetable)

// let t2 = vegetable.unshift("potato")
// console.log(t2)
// console.log(vegetable)


// let t3 = vegetable.pop()
// console.log(t3)
// console.log(vegetable)

// let t4 = vegetable.shift()
// console.log(t4)
// console.log(vegetable)


// let t5 = vegetable.includes("cabbage")
// console.log(t5)



// map() , filter() , reduce() , forEach()
// find() , findIndex() ,some()  , every()


// table of 2
//             0 1 2 3 4
let numbers = [1,2,3,4,5,6,7,8,9,10]
let aa = numbers.map(function(el,index,arr){
    //console.log(el,index,arr)
    return el * 3
})
console.log(aa)

// filter
let marks = [77,66,44,23,90,77,46]
// [77,66,90,77]

let bb = marks.filter(function(el,index,arr){
    return el > 60
})
console.log(bb)

//reduce()

let m = [11,22,33]
let q1 = m.reduce(function(acc,el,index,arr){
    return acc + el // 66
},0)
console.log(q1)


// program 4
//             0        1       2          3
let cities = ["pune","wardha","indore","banglore"]
let q4 = cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
console.log(q4)


// program 5


let numB = [76,99,45,33,88,91]
let q5 = numB.filter(function(el,index,arr){
    return el > 90
})
console.log(q5)

let q6 = numB.find(function(el,index,arr){
    return el > 90
})
console.log(q6)

let q7 = numB.findIndex(function(el,index,arr){
    return el > 90
})
console.log(q7)

let j = [11,22,33,11,34]
let a = j.every(function(el,index,arr){
    return el > 13
})
console.log(a)

let b = j.some(function(el,index,arr){
    return el > 130
})
console.log(b)




















