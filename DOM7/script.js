let buttonOne = document.querySelector('#one')
let ulList = document.querySelector('ul')
let inputList = document.querySelector('input')

buttonOne.addEventListener('click', function () {
    let text = inputList.value
    let newE = document.createElement('li') // <li></li>
    newE.textContent = text  // <li>Papaya</li>
    createButtons(newE)
    ulList.appendChild(newE)
    inputList.value = ""

})


ulList.addEventListener('click', function (e) {
    //console.log(e.target) // element
    //console.log(e.target.tagName) //tagName of element
    //console.log(e.target.className) // class attribute if available on element

    if (e.target.tagName === "BUTTON") {

        if (e.target.className === "remove") {

            console.log('removed is click')

        }
        else if (e.target.className === "down") {
            console.log('down is clicked')
        }

        else if (e.target.className === "up") {
            console.log('up is clicked')
        }

    }


})

function createButtons(li) {
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button>Remove</button>
    remove.classList.add('remove')// <button class = "remove">Remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "up" // <button>Up</button>
    up.classList.add('up')// <button class = "up">Up</button>
    li.appendChild(up)


    let down = document.createElement('button') // <button></button>
    down.textContent = "Down" // <button>Down</button>
    down.classList.add('down')// <button class = "down">down</button>
    li.appendChild(down)


}




// <p id = "one" class = "two" name = "nm">para</p>
// document.querySelector('p')
// document.querySelector('#one')
// document.querySelector('.two')
// document.querySelector('p[name = "nm"]')