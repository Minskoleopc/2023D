let x = 10
console.log(x)
x = 100
console.log(x)

const h = 88
console.log(h)
//h = 999

let a = 10
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
//console.log(22%7)


let x1 = 10
let x2 = 5

console.log(x1 + x2)
console.log(x1 - x2)
console.log(x1 * x2)
console.log(x1 / x2)
console.log(x1 % x2)


function Cal(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}
Cal(12, 6)
Cal(8, 4)


// function  without parameter and without return type 

function add() {
    console.log(9 + 9)
}
add()
add()
add()
add()
// function with parameter and without return type 
function addB(x, y) {
    console.log(x + y) // 5
}
addB(2, 3)
addB(21, 34)
// function with parameter and with return type 

function addC(x, y) {
    return x + y
}
let q1 = addC(12, 3)
console.log(q1)
console.log(q1 + q1)
console.log(q1 * 0.10)


// type 
// Human 

// Propety  -- age weight height
// Methods  --  walk() , talk()

// Vehicle
// Property -- color , model , type ,regNo
// Method -- start() , stop()

// Bank - 
// Property - accNo , branchName  accName, type 
// Method - withdrawl() , deposit()


let a1 = 10
console.log(a1)
console.log(typeof a1) // 89,-89,99.9,-90,0

let a2 = true
console.log(a1) // true
console.log(typeof a2) //true or fale

let a3 = "chinmay"
console.log(a3)
console.log(typeof a3)
// "A" , "1","A1$" , " ", "&***"

// comparison 
// < , > , <= , >= , == , != , === , !==

console.log(typeof '10') // string 
console.log(typeof 10)// number

// == , != ---------> value
// === , !== ------> value and type 

console.log(6 == 6)
console.log(6 == '6')
console.log(6 === '6')
console.log(6 === 6)
console.log(6 !== '6')
console.log(6 !== 6)
console.log(7 > 6)
console.log(7 < 6)
console.log(7 >= 6)
console.log(6 <= 6)
console.log(7 == '7')



// Logical operator

// AND ------- &&
// True   &&  True  ------ True
// False  &&  True  ------ False
// False  &&  True  -----> False
// False  &&  False -----> False


console.log(7 == 7 && 8 == 8)
console.log(7 != 7 && 8 == 8)
console.log(7 == 7 && 8 != 8)
console.log(7 != 7 && 8 != 8)

// OR

// True   ||  True  -----> True
// False  ||  True  -----> True
// True   ||  False -----> True
// False  ||  False -----> False

console.log(7 == 7 || 8 == 8)
console.log(7 != 7 || 8 == 8)
console.log(7 == 7 || 8 != 8)
console.log(7 != 7 || 8 != 8)

// NOT 
// True -- False
// False -- True
console.log(!(6 === '6'))
console.log(!(6 !== '6'))

// conditional stamenents 


// numT > 0 && numT <= 5   ---- 10 %
// numT > 5 && numT <= 10  ---- 20%
// numT > 10               ---- 30 %

// if(condition){

// }
// else {

// }

let numT = 17
// if(numT > 0 && numT <= 5){
//     console.log('10 % discount')
// }
// if(numT > 5 && numT <= 10){
//     console.log('20 % discount')
// }
// if(numT > 10 ){
//     console.log('30 % discount')
// }

if (numT > 0 && numT <= 5) {
    console.log('10 % discount')
}
else if (numT > 5 && numT <= 10) {
    console.log('20 % discount')
}
else if (numT > 10) {
    console.log('30 % discount')
}

let marks = 55

// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 75){
//     console.log('Grade B')
// }
// if(marks > 65){
//     console.log('Grade C')
// }


if(marks > 90){
    console.log('Grade A')
}
else if(marks > 75){
    console.log('Grade B')
}
else if(marks > 65){
    console.log('Grade C')
}
else {
    console.log('Try again...')
}

// Ternary operator 


let a12 = 10
let b22 = 5
if(a12 > b22){
    console.log("a12 is greater")
}
else {
    console.log('b22 is greater')
}

let i = 100
let j = 500
let k = 4500
if(i > j && i > k){
    console.log('i is greater')
}
else if(j > k && j > i){
    console.log('j is greater')
}
else  {
    console.log('k is greater')
}


let r = 7
let l = 50
r > l ? console.log('r is greater'):console.log('l is greater')


let age = 17
let q111 = age >= 18 ? "can drive":"cannot drive"
console.log(q111)






























