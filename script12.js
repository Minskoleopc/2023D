
//              0         1         2         3       4
let names = ["abhisha","poorva", "mayuri", "komal","pranali"]
console.log(names)
console.log(names[0])

// Object 
// Properties and methods
// Method
// Action and return 
console.log(names.length)

for(let i = 0 ; i < 5 ; i++){ //1 // 2 // 3 // 4 // 5
    //console.log(i) // 0 // 1 // 2 // 3 // 4
    console.log(names[i])
    // i - 0
    // i - 1
    // i - 2
    // i - 3
    // i - 4
}

console.log(names.length-1)

for(let i = names.length -1  ; i >= 0 ; i--){
   // console.log(i)
   console.log(names[i])

   // i - 4
   // i - 3
   // i - 2
   // i - 1
   // i - 0
}

// Array 

// Object -- properties and method 

//           0           1        2           3           4
let city = ["Pune", "banglore","chennai", "hydrerabad", "mumbai"]

// length 
let w1 = city.length
console.log(w1)

//push()
let w2 = city.push("nagpur")
console.log(w2)
console.log(city)

//unshift()
let w3 = city.unshift("wardha")
console.log(w3)
console.log(city)
//pop()

let w4 = city.pop()
console.log(w4)
console.log(city)

// shift()

let w5 = city.shift()
console.log(w5)
console.log(city)


// includes()
// [ 'pune', 'banglore', 'chennai', 'hydrerabad', 'mumbai' ]

let w6 = city.includes('pune')
console.log(w6)













