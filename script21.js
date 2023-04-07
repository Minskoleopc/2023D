let firstName = 'chinmay';
let lastName = `chinmay`;
let middleName = "shirish"

console.log(firstName)
console.log(lastName)
console.log(middleName)

// String stores the value by index 
let city = "pune"
// 0    1   2   3
// p    u   n   e
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

// Print every character of string 

let city2 = "Nagpur"

// 0   1  2  3  4  5
// N   a  g  p  u  r
for (let i = 0; i < city2.length; i++) {
    //console.log(i)
    console.log(city2[i])
}

for (let i = city2.length - 1; i >= 0; i--) {
    //console.log(i)
    console.log(city2[i])
}

// String + String ------> String 
// Number + String ------> String 
// String + Number ------> String 
// Number + Number ------> Number


let a = 10
let b = 5
let c = "hello"


console.log(a + b + c)
console.log(c + b + a)
console.log(a + c + b)

// number + number + string 
// "15hello"
// "hello"+b+a
// "10hello5"

let firstNamee = "chinmay"
let lastNamee = "deshpande"

// My firstName is chinmay and lastName name is deshpande
console.log("My firstName is " + firstNamee + " My lastName is " + lastNamee)
console.log(`My firstName is ${firstNamee} and My lastName is ${lastNamee}`)

//String object ---- properties and methods

let city3 = "wardha"
// 0    1    2   3   4   5
// w    a    r   d   h   a
console.log(city3[0])
console.log(city3.length)

// toUpperCase()
let  city4 = "Jaipur"
let x1 = city4.toUpperCase()
console.log(x1)
//toLowerCase()

let x2 = city4.toLowerCase()
console.log(x2)
// includes()

let x3 = city4.includes('J')
console.log(x3)

// indexOf()
// J  a  i  p  u  r
let x4 = city4.indexOf('J')
console.log(x4)
console.log(city4.indexOf('o'))

// charAt()
// 0  1  2  3  4 5
// J  a  i  p  u  r
let x5 = city2.charAt(1)
console.log(x5)
//startWith()
let x6 = city4.startsWith('J')
console.log(x6)
// endsWith()
let x7 = city4.endsWith('r')
console.log(x7)


let city5 = " jaipur "
console.log(city5.length)
console.log(city5.trimStart().length)

// trimEnd()
let city6 = " jaipur "
console.log(city6.length)
console.log(city6.trimEnd().length)
console.log(city6.trim().length)



















