
let firstName = "chinmay"
let lastName = 'deshpande'
let middleName = `shirish`

console.log(firstName)
console.log(lastName)
console.log(middleName)


// String stores the value by index
let city = "Pune"
// 0    1   2   3
// P    u   n   e

console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

for(let i = 0 ; i < 4 ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0 , 1 , 2 , 3
    console.log(city[i])
}

for(let i = city.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(city[i])
}

// string + string  =====> string 
// number + string  =====> string 
// string + number  ====>  string
// number + number  ====>  number

let a = 10
let b = 20
let c = "hello"

console.log(a+b+c)
console.log(c+b+a)
console.log(a+c+b)


let fn = "chinmay"
let ln = "deshpande"

// My firstName is chinmay and my lastName is deshpande
console.log("My firstName is "+fn+" and my lastName is "+ln)
console.log(`My firstName is ${fn} and my lastName is ${ln}`)


let city2 = "Nagpur"

// Properties and Method
let a1  = city2.length
console.log(a1)



// toUpperCase()
let city3 = "Wardha"

let c1 = city3.toUpperCase()
console.log(c1)
console.log(typeof c1)


// toLowerCase()
let c2 = city3.toLowerCase()
console.log(c2)
// includes()
let c3 = city3.includes('a')
console.log(c3)
console.log(typeof c3)

// indexOf()
let c4 = city3.indexOf('w')
let c5 = city3.indexOf('W')
console.log(c4)
console.log(c5)

// charAt()
let c6 = "pune"
// 0   1  2   3
// p   u  n   e
let c7 = c6.charAt(2)
console.log(c7)











