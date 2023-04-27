// Object literal
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:45
}

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:34,
    rollNo:77
}
// retrive // update  //delete // add

// function constructor 


function Person(fn,ln,age,rn){
    this.firstName = fn
    this.lastName = ln 
    this.age = age
    this.rollNo = rn
}

let amolB = new Person("amolB","raoB",23,56)
let amolC = new Person("amolC","raoC",27,55)
let amolD = new Person("amolD","raoD",23,54)
console.log(amolB)
console.log(amolC)
console.log(amolD)

let vehicle = function(type,color){
    this.type = type 
    this.color = color
}
let audi  = new vehicle("SUV","red")
let audi6  = new vehicle("SUV","green")


// Es6 


class PersonB {
    constructor(fn,ln,age,roll){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
        this.rollNo = roll
    }

}
let amolG = new PersonB("amolg","raog",4,55)
let amolI = new PersonB("amoli","raoe",4,66)
console.log(amolG)
console.log(amolI)


let vehicleB = class {

    constructor(type,color){
        this.type  = type 
        this.color = color
    }

}
let k = new vehicleB("sedane","red")
let l = new vehicleB("suv","blue")

console.log(k)
console.log(l)


// Object.create 

let k6 = Object.create({})

console.log(k6)

k6.firstName = "raj"
k6.lastName = "sharma"
k6.age = 34
k6.rollNo = 98

console.log(k6)


// object literal 
// function cobstructor
// Es6 
// Object.create methodg


class Student {

    firstName ="ram"
    lastName  = "dani"
}

let s1 = new Student()
let s2 = new Student()

s2.firstName = "ninad"
s2.lastName = "deshmukh"

console.log(s1)
console.log(s2)

// let s3 = {
//     firstName:"mayuri",
//     lastName:"katwe"
// }


class Stu {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln 
    }
}

let sarika = new Stu("sarika","pansare")
let deepali = new Stu("deepali","jhadhav")







