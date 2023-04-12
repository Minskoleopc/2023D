
// Object literal
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:34
}
console.log(chinmay)

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:34,
    rollNo:56
}
console.log(amol)

// 100 object 400 lines
// template ------ > objects
// user defined data type  ---------------- class


// program 

let x = 10
console.log(x)
console.log(typeof  x)

let canDrive = true 
console.log(canDrive)
console.log(typeof canDrive)

let city = "pune"
console.log(city)
console.log(typeof city)

let names = ["chinmay","ram"]
console.log(names)


let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}

let amolA = new Person()
console.log(amolA)

amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 23
amol.rollNo = 55
console.log(amol)



// program 2

class PersonB {

    constructor(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.rollNo = rollNo
    }

}

let amolC = new PersonB("amol","rao",34,89)
let chinmayc = new PersonB("chinmay","deshpande",32,90)
console.log
console.log(amolC)
console.log(chinmayc)
chinmayc.firstName = "chinmay s"









