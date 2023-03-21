
//             0          1       2     3
let names = ["chinmay","sarika","ram","satish"]
console.log(names[0])
console.log(names[1])

names[2] = "vijeet"
console.log(names[2])

// for loop
for(let i = 0 ; i < 4 ; i++){ //1  // 2 // 3 // 4
    //console.log(i) 
    console.log(names[i])
    //i------ 0
    //i-----  1
    //i ----  2
    //i ----  3
}

//              0        1       2         3    
let fruits = ["apple","mango","banana","orange"] //1 / 2 // 3
console.log(fruits[0])
for(let i = 0 ; i < 4 ; i++){
    //console.log(i) // 0,// 1 // 2 // 3
    console.log(fruits[i])

}


// program 3

// Object 
// Human -- amol
// properties - age , weight , color , gender
// Method     - walk() , talk()


// Vehicle 
// Properties - color , model , type 
// start() ,stop()


// Bank 
// Properties -  accNo , accName , branchName 
// Method - deposit() , withdrawl()

//                 0           1        2       3
let vegatable = ["cabbage","tomato","potato","brinjal"]
let q1 = vegatable.length
console.log(q1)

// push()
// action 
// return 

// gym --- 
// action --- excercise
// return --- health

let q2 = vegatable.push("cauliflower")
console.log(vegatable)
console.log(q2)

let q3 = vegatable.unshift("ladyfinger")
console.log(vegatable)
console.log(q3)

let q4 = vegatable.pop()
console.log(vegatable)
console.log(q4)

let q5 = vegatable.shift()
console.log(vegatable)
console.log(q5)

// property -- length 

// push() 
// unshift()
// pop()
// shift()










