// Map and object 
// Map and Object can store the items on (key/value)(property/value )
// Map key can be any data type but Object key will always be string 

let roles = new Map()
//size 
console.log(roles.size)
// set()
roles.set(1, "admin")
roles.set(2, "customer")
roles.set(3, "manager")
roles.set(4, "support")
console.log(roles.size)

// has()
let q1 = roles.has(1)
console.log(q1)

//get()
let admin = roles.get(1)
console.log(admin)

//clear()
// roles.clear()
// console.log(roles)

// delete()
roles.delete(1)
console.log(roles)

// forEach()
roles.forEach(function (v, k) {
    console.log(v, k)
})
for (let k of roles.keys()) {
    console.log(k)
}
for (let v of roles.values()) {
    console.log(v)
}
for (let [k, v] of roles.entries()) {
    console.log(k, v)
}

let info = [
    [true,"cnDrive"],
    [false,"cannot drive"],
    [1,"SUV"],
    ["name","Audi"]
]
console.log(info)

// SET -----

let setA = new Set()
console.log(setA)

// add()
setA.add(11)
setA.add(12)
setA.add(13)
setA.add(14)
setA.add(11)
console.log(setA)

//has()
let q11 = setA.has(13)
console.log(q11)

// delete()
let q12 = setA.delete(63)
console.log(q12)
console.log(setA)

//clear()
// setA.clear()
// console.log(setA)

setA.forEach(function(v){
    console.log(v)
})

// console.log(setA.values())
// console.log(setA.keys())
// console.log(setA.entries())
let setB = new Set(["chinmay","ram","laksman","sita","kavita","ram"])
console.log(setB)

// DOM






