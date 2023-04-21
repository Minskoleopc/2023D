//<li>Grapes</li>


//step ---- <li></li>
//add the text <li>Papaya</li>
//place  under ul 

let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')
let inputText = document.querySelector('input')
let headOne = document.querySelector('h1')

console.log(ulList)
console.log(buttonA)
console.log(inputText)

buttonA.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li') //<li></li>
    newLi.textContent = text  // <li>Papaya</li>
    ulList.appendChild(newLi)
    inputText.value = ""

})





// textContent sample
//console.log(headOne.textContent)
// buttonA.addEventListener('click',function(){
//     headOne.textContent = "Vegetable"

// })







// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// console.log(info.firstName)
// console.log(info.lastName)
// info.firstName = "tanmay"
// console.log(info)