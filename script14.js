
//                 0   1    2     3
let birthYear = [1989,1990,1991,1992]
let ages = []
// [34,33,32,31]
for(let i = 0 ; i < birthYear.length ; i++){
    // console.log(i)
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let a = 2023 - birthYear[i]
    ages.push(a)
}
console.log(ages)

// map()
// birthYear = [1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
   //console.log(el,index,arr) 
   return 2023 - el
})
console.log(q1)

let numbers  = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]
let q2 = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(q2)


// program2
let marks = [11,22,33,44,33,44,66,33,44]
let above40 = []
// [44,44,66,44]
for(let i = 0 ; i < marks.length ; i++){
  //  console.log(i)
  //console.log(marks[i])
  if(marks[i] > 40){
    above40.push(marks[i] )
  }
}
console.log(above40)
let q3  = marks.filter(function(el,index,arr){
    return el > 40
})
console.log(q3)

// program 3
let nm = [11,22,33]
let total  = 0
for(let i = 0 ; i < nm.length ; i++){
    // console.log(i)
    // console.log(nm[i])
    total = total + nm[i]
    //       0    +   11  -----> 11
    //       11   +   22  -----> 33
    //       33   +   33  -----> 66

}
console.log(total)

let q3a = nm.reduce(function(acc,el,index,arr){
    return el + acc // 33
},0)
console.log(q3a)













