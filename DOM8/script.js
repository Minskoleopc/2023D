let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let addButton = document.querySelector('#one')



ulList.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e.target.tagName)
    console.log(e.target.className)


    if(e.target.tagName === "BUTTON"){

        if(e.target.className === 'remove'){
            let  li = e.target.parentElement
            let ulList = li.parentElement
            ulList.removeChild(li)
        }
        else if(e.target.className === 'up'){
            let  li = e.target.parentElement
            let ulList = li.parentElement
            let prev = li.previousElementSibling 
            if(prev){
                ulList.insertBefore(li,prev)
            }
       
        }
        else if(e.target.className === 'down'){
            let  li = e.target.parentElement
            let ulList = li.parentElement
            let next = li.nextElementSibling 
            if(next){
                ulList.insertBefore(next,li)
            }
        }



    }









})






addButton.addEventListener('click',function(){
    let vl = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = vl
    createButtons(newLi)
    ulList.appendChild(newLi)
    
})






function createButtons(li){
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)



    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

    
    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)


}