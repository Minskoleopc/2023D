

console.log(typeof 10) // number
console.log(typeof '10')

// comparision 
// < , > , <= , >= , != , == , === , !==
// == , !=    -----  value 
// === , !==  -----  value and type

console.log(1 == 1) // true
console.log(12 > 4) // true
console.log(6 == 7) // false
console.log(6 != 7) // true
console.log(8 === 8) // true
console.log(9 == '9') // true
console.log(9 === '9') // false
console.log( 9 !== '9') // true
console.log(9 != '9') // false
console.log(7 <= 7) // true
console.log(7 >= 7) // true
console.log(6 <= 7) // true
console.log(9 === 9) // true
console.log(78 < 7) // false

// AND 

// True   &&  True   ----  True 
// False  &&  True   ----- False
// True   &&  False  ----- False
// False  &&  False  ----- False

console.log(8 == 8  && 7 != 6)
console.log(8 != 8  && 7 != 6)
console.log(8 == 8  && 7 == 6)
console.log(8 != 8  && 7 == 6)

// OR 
// True   ||  True   ----  True 
// False  ||  True   ----- True
// True   ||  False  ----- True
// False  ||  False  ----- False

console.log(8 == 8  || 7 != 6)
console.log(8 != 8  || 7 != 6)
console.log(8 == 8  || 7 == 6)
console.log(8 != 8  || 7 == 6)


// NOT
// True  --- False 
// False --- True

console.log(! 7 == 7)
console.log(! 7 != 7)


// 6 pm 
// conditional statements 
// tenary operator
// switch case 
// loops