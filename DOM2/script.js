
// let headOne = document.querySelector('h1')
// headOne.addEventListener('click',function(){
//     headOne.style.color = "green"
// })

// <h2 id = "one" class = "two" name = "nm">Head2</h2>

// Css selector

// tagName 
let byTagName = document.querySelector('h2')
console.log(byTagName)
// id 
let byId = document.querySelector('#one')
console.log(byId)
// className
let byClassName = document.querySelector('.two')
console.log(byClassName)
// any attribute tagName[attribute = "value"]
let byNameAtrribute = document.querySelector('h2[name="nm"]')
console.log(byNameAtrribute)

//<h3 id = "three" class = "four" name = "nm2">head3</h3>

// tagName 

let tagName2 = document.querySelector('h3')
let idName = document.querySelector('#three')
let className = document.querySelector('.four')
let attrB = document.querySelector('h3[name= "nm2"]')

console.log(tagName2)
console.log(idName)
console.log(className)
console.log(attrB)