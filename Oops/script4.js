
// program 1

function Person(fn,ln,age){
    this.firstName = fn 
    this.lastName = ln 
    this.age = age 
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amol = new Person('amol',"rao",13)
let chinmay = new Person('chinmay',"deshpande",27)

console.log(amol)
console.log(chinmay)

// amol.display()
// // chinmay.display()


// // Every object  .__proto__ === Parent.Prototype

// console.log(amol.__proto__ === Person.prototype)
// console.log(chinmay.__proto__ === Person.prototype)

// Person.prototype.display = function(){
//     console.log(this.firstName + this.lastName)
// }

// Person.prototype.country  = "India"

// amol.display()
// chinmay.display()

// console.log(amol.country)
// console.log(chinmay.country)


// console.log(amol instanceof Person)
// console.log(chinmay instanceof Person)

// console.log(chinmay.hasOwnProperty('country'))
// console.log(chinmay.hasOwnProperty('firstName'))


// let names = ["chinmay","ram","sham","sarika"]

// console.log(names)
// console.log(names instanceof Array)
// console.log(names.__proto__ ===  Array.prototype)

// Array.prototype.greet = function(){
//     console.log('hello')
// }
// names.greet()


// program 2


class PersonB {
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    display(){
        console.log(this.firstName + this.lastName)
    }

}

let hari = new PersonB("hari","prasad",23)
let amole = new PersonB("amol","rao",43)

hari.display()
amole.display()

console.log(hari)
console.log(amole)

// program 3


let a = Object.create({})
console.log(a)
a.firstName = "chinmay"
a.lastName = "deshpande"
console.log(a)

let obj = {
    init:function(fn,ln){
        this.firstName = fn
        this.lastName = ln
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }

}
let c = Object.create(obj)
console.log(c)
c.init("chinmay","deshpande")
c.display()








