// numT > 0 && numT <= 5 ---- 5 % discount
// numT > 5 && numT <= 10 --- 10 % discount
// numT > 10              --- 20 % discount

let numT = 7

// if (numT > 0 && numT <= 5) {
//     console.log('5 % discount')
// }
// if (numT > 5 && numT <= 10) {
//     console.log('10 % discount')
// }
// if (numT > 10) {
//     console.log('20 % discount')
// }


// if (numT > 0 && numT <= 5) {
//     console.log('5 % discount')
// }
// else if (numT > 5 && numT <= 10) {
//     console.log('10 % discount')
// }
// else if (numT > 10) {
//     console.log('20 % discount')
// }


// program 2

let marks = 55
// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks > 75){
//     console.log("Grade B")
// }
// if(marks > 65){
//     console.log("Grade C")
// }

// if(marks > 90){
//     console.log("Grade A")
// }
// else if(marks > 75){
//     console.log("Grade B")
// }
// else if(marks > 65){
//     console.log("Grade C")
// }
// else {
//     console.log("Try again")
// }



// program 3
let a = 10
let b = 5

if (a > b) {
    console.log('a is greater')
}
else {
    console.log('b is greater')
}

// program 4
let x = 10
let y = 20
let z = 30

if (x > y && x > z) {
    console.log('x is greater')
}
else if (y > x && y > z) {
    console.log('y is greater')
}
else {
    console.log('z is greater')
}

// program 5

let h1 = 90
let h2 = 45
h1 > h2 ? console.log('h1 is greater') : console.log('h2 is greater')

let age = 17
let q1 = age >= 18 ? "can drive" : "cannot drive"
console.log(q1)


// program 6

let city = 'bhopal'

// switch(city){
//     case 'pune':
//         console.log('MH')
//     case 'jaipur':
//         console.log('RJ')
//     case 'indore':
//         console.log('MP')
//     default:
//         console.log('Incorrect city name')
// }

// switch(city){
//     case 'pune':
//         console.log('MH')
//         break
//     case 'jaipur':
//         console.log('RJ')
//         break
//     case 'indore':
//         console.log('MP')
//         break
//     default:
//         console.log('Incorrect city name')
// }

switch (city) {
    case 'pune':
    case 'nagpur':
        console.log('MH')
        break
    case 'jaipur':
    case 'udaipur':
        console.log('RJ')
        break
    case 'indore':
    case 'bhopal':
        console.log('MP')
        break
    default:
        console.log('Incorrect city name.')
}













