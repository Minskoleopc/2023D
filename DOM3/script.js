// h2 id = "one"  class = "two" name = "nm">head2</h2>
// CSS selector
// tagName
let headTwo = document.querySelector('h2')
console.log(headTwo)
// id 
let byId = document.querySelector('#one')
console.log(byId)
// class 
let className = document.querySelector('.two')
console.log(className)

// attribute // tagName[attribute="value"]
let attrF  = document.querySelector('h2[name="nm"]')
console.log(attrF)


