let headOne = document.querySelector('h1')
console.log(headOne)

let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
    headOne.style.color = "green"
    headOne.style.backgroundColor = "yellow"
})