// map 

// map is similar to objects  as they store items  in property value format

// map keys can any data type 
// object keys can be string only

let obj = {
    //key:value
    //property:value

    1:"admin",
    fullname:"chinmay deshpande",
    subjects:"hindi"
}
console.log(obj)


let mapA = new Map()

// Everything in js object 
// Properties and methods
console.log(mapA)

// property  size
console.log(mapA.size)


// add
//mapA.set('properOrKeyName','values')

mapA.set(1,"admin")
mapA.set(true,"canDrive")
mapA.set('fullName',"chinmay deshpande")
console.log(mapA)
console.log(mapA.size)

// get()
let q1 = mapA.get(1)
console.log(q1)
// set()
mapA.set(1,"customer")
console.log(mapA.get(1))

// delete()
mapA.delete(true)
console.log(mapA)

//has()
let q2 = mapA.has(1)
let q3 = mapA.has(3)
console.log(q2)
console.log(q3)

//clear()
mapA.clear()
console.log(mapA)

////////////////////////////////////////////////

let mapB = new Map([
    [1,"admin"],
    [2,"support"],
    [3,"customer"],
    [4,"manager"]
])
console.log(mapB)

for(let key of mapB.keys()){
    console.log(key)
}

for(let val of mapB.values()){
    console.log(val)
}

for(let [k,v] of mapB.entries()){
    console.log(k,v)
}

mapB.forEach(function(v,k){
    console.log(v,k)
})


let mapC = new Map([
    ["fullName","chinmaydeshpande"],
    ["compant","dxc"]
])
console.log(mapC)

let a = new String("hello")
console.log(a.toUpperCase())


let names  = new Array(["chinmay","sarika","poorva"])
console.log(names)

// SET-----