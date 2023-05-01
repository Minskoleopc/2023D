
// prototype inheritance
// object literal 

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:23,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// console.log(amol)
// amol.display()

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:25,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(chinmay)
// chinmay.display()


// function constructor 


function Person(fn,ln, ag){
    this.firstName = fn
    this.lastName  = ln
    this.age = ag
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }

}

let amolB = new Person("amol","rao",34)
let amolC = new Person("amolC","raoC",32)
let amolD = new Person("amolD","raoD",33)

console.log(amolB)
console.log(amolC)
console.log(amolD)

// amolB.display()
// amolC.display()
// amolD.display()


// Proptotype 

// Every object has .__proto__ === Parent.prototype

console.log(amolB.__proto__ === Person.prototype)

Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}

Person.prototype.country = "India"

amolB.display()
amolC.display()
amolD.display()
console.log(amolB.country)


console.log(amolB instanceof Person)
console.log(amolC instanceof Person)
console.log(amolD instanceof Person)

console.log(amolD.hasOwnProperty('firstName'))
console.log(amolD.hasOwnProperty('country'))

// Es6 class


// Object create 


