let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:32,
    rollNo:23
}

let  amol = {
    firstName:"amol",
    lastName:"rao",
    age:31,
    rollNo:21
}

// retrive(.dot notation and bracket notatio)
console.log(amol.firstName)
console.log(amol['firstName'])
// update (.dot notation and bracket notatio)
amol.firstName = "amol r"
amol['firstName'] = "amol k"
// delete (.dot notation and bracket notatio)
delete amol.age
delete amol['rollNo']
// add (.dot notation and bracket notatio)
amol.city = "pune"
amol['language'] = "hindi"

amol = {
    firstName:"amol",
    lastName:"rao",
    age:31,
    rollNo:21
}

// for(let key in amol){
//     console.log(key,amol[key])
// }


for(let key of Object.keys(amol)){
    console.log(key)
}

for(let v of Object.values(amol)){
    console.log(v)
}

for(let [k,v] of Object.entries(amol)){
    console.log(k,v)
}

console.log(Object.keys(amol))
console.log(Object.values(amol))
console.log(Object.entries(amol))


// Destructuring in Es6
//-----------------------------------------------
let names = ["poorva","sarika","mayuri"]
// let a = names[0]
// let b = names[1]
// let c = names[2]
// console.log(a)
// console.log(b)
// console.log(c)

let [n1,n2,n3] = names
console.log(n1)
console.log(n2)
console.log(n3)


let fruits = ["apple","mango","banana"]
let [s1,,s3] = fruits
console.log(s1)
console.log(s3)



let numbers = [[11,22,33],[44,55,66]]
// let [a1,a2] = numbers
// console.log(a1)
// console.log(a2)
let [[b1,b2,b3],[b4,b5,b6]] = numbers
console.log(b3)
console.log(b5)



let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

// let {firstName,lastName} = info
// console.log(firstName)
// console.log(lastName)

// let {firstName:fn,lastName:ln} = info
// console.log(fn)
// console.log(ln)

let family = {
    fullName:"chinmay",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}

let {fullName:k1,parent:{mother:k2,father:k3}} = family
console.log(k1)
console.log(k2)
console.log(k3)


