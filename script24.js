
//             0         1       2       3
let names = ["poorva", "mayuri", "ram", "satish"]

// let a = names[0]
// let b = names[1]
// let c = names[2]
// let d = names[3]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

let [x1, x2, x3, x4] = names
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)

// program 2


let numbers = [[11, 22, 33], [44, 55, 66]]

// let [a1,a2] =numbers
// console.log(a1)
// console.log(a2)

let [[b1, b2, b3], [b4, b5, b6]] = numbers
console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)
console.log(b5)
console.log(b6)


// program 3

let info = {
    firstName: "chinmay",
    lastName: "deshpande"
}

// let fn = info.firstName
// let ln = info.lastName

// console.log(fn)
// console.log(ln)

// let {firstName,lastName} = info
// console.log(firstName)
// console.log(lastName)

// let {firstName:fn,lastName:ln} = info
// console.log(fn)
// console.log(ln)



// program 4

let family = {
    fullName: "chinmay deshpande",
    parent: {
        mother: "kanchan deshpande",
        father: "shirish deshpande"
    }
}

let { fullName, parent: { mother, father } } = family
console.log(fullName)
console.log(mother)
console.log(father)

// program5


let info2 = {
    fullName: "chinmay deshpande",
    age: 23,
    rollNo: 34,
    skills: ["python", "java", "javascript", "sql"],
    marks: {
        maths: 90,
        marathi: 95,
        science: 45,
        hindi: 23,
        sankrit: 92,
    }
}

let {
    fullName: fn1,
    age,
    rollNo
    , skills: [sk1, sk2, sk3, sk4]
    , marks: { maths, marathi, science, hindi, sankrit }
} = info2

console.log(sankrit)
console.log(sk3)


let students = [
    {
        firstName: "rahul",
        lastName: "singh"
    }
    ,
    {
        firstName: "raj",
        lastName: "sharma"
    },

    {
        firstName: "sachin",
        lastName: "tendulkar"
    }
]


let  [{firstName:f11,lastName:l11},{firstName:f22,lastName:l22},{firstName:f33,lastName:l33}] = students
console.log(f11)
console.log(l33)


let info3 = {
    firstName:"rohit",
    lastName:"vyas",
    age:23,
    skills:["python","html","css"]
}

for(let key of Object.keys(info3)){
    console.log(key)
}

for(let v of Object.values(info3)){
    console.log(v)
}

for(let [k,v] of Object.entries(info3)){
    console.log(k,v)
}



