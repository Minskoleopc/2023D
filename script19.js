
//       array
let info = ["chinmay","deshpande",23,55]
// retrive 
console.log(info[0])
// update 
info[1] = "dani"
// add 
info.push("city")
info.unshift("Mr")
// delete
info.pop()
info.shift()
info.splice(2,1)

// info = ["chinmay","deshpande",23,55]
// object
let info2 = {
    // property:value
    // key:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:55
}

// retrive  (dot notation and bracket notation)
console.log(info2.firstName)
console.log(info2['firstName'])
// update  (dot notation and bracket notation)
info2.firstName =  "tanmay"
info2['firstName'] = "amit"

// add  (dot notation and bracket notation)
info2.city = "pune"
info2['language'] = "hindi"

// delete (dot notation and bracket notation)
delete info2.firstName
delete info2['lastName']
console.log(info2)


let vehicle = {
    color:"red",
    type:"sedande"
}


console.log(vehicle['color'])
vehicle['color'] = "blue"
vehicle['regNo'] = 123
delete vehicle['type']

// dot notation
// retrive 
console.log(vehicle.color)
// update 
vehicle.color = "green"
// add
vehicle.regNo = 233
// delete
delete vehicle.type

//            0      1        2       3
let names = ["ram","sita","laxman","sachin"]
for(let i = 0 ; i < names.length ; i++){
   // console.log(i)
    console.log(names[i])
}

let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:34
}
//console.log(info3[0])

for(let k in info3){
    console.log(k,info3[k])
}