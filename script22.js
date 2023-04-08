let city = "chandrapur"

//  0    1    2    3    4   5   6    7   8   9
//  c    h    a    n    d   r   a    p   u   r
// -10  -9   -8   -7   -6  -5  -4   -3  -2  -1

console.log(city[0])

let x1 = city.slice(2)
console.log(x1)
console.log(city.slice(-8))
console.log(city.slice(1,6))
console.log(city.slice(-8,6))
console.log(city.slice(-8,-1))
console.log(city.slice(-10,-2))
console.log(city.slice(1,-1))
console.log(city.slice(-1,-8))

let str = "I am learning js"
let q1 = str.split(" ")
let q2 = str.split("a")
console.log(q1)
console.log(q2)

//["I","am","learning","js"]
//["I ","m le","rning js"]

let str2 = "I am learning javascript"
let q3 = str2.replace("javascript","python")
console.log(q3)

// toUpperCase()

let city3 = "Nagpur"
console.log(city3.toUpperCase())


let city4 = "Nagpur"
console.log(city4.toLowerCase())

let q4 = city4.includes("nag")
let q5 = city4.includes("g")
console.log(q4)
console.log(q5)


city4 = "Nagpur"
let q6 = city4.indexOf("a")
let q7 = city4.indexOf("U")
console.log(q7)


city4 = "Nagpur"
let q8 = city4.startsWith("Na")
let q9 = city4.startsWith("N")
console.log(q8)
console.log(q9)


city4 = "Nagpur"
let q10 = city4.endsWith("r")
let q11 = city4.endsWith("ur")
console.log(q10)
console.log(q11)


city4 = " Nagpur "
console.log(city4.length)
let q12 = city4.trim()
console.log(q12.length)

city4 = " Nagpur "
console.log(city4.length) // 8
let q13 = city4.trimStart()
console.log(q13.length) //7


city4 = " Nagpur "
console.log(city4.length) // 8
let q14 = city4.trimEnd()
console.log(q14.length) //7

let city5 = "indore"
let q15 = city5.charAt(2)
console.log(q15)

// 0  1  2  3  4  5
// i  n  d  o  r  e

let q16 = city5.substring(1,3)
console.log(q16)


let city6 = "pune"

for(let i = 0 ; i < city6.length ; i++){
    //console.log(i)
    console.log(city6[i])
}


for(let i = city6.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(city6[i])
}
let x = 10
let y = 20
console.log(`Addition of two numbers is :${x+y}`)
console.log("Adition of two numbers is :"+(x+y))




