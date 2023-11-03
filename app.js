let ul = document.querySelector('ul')
let inputValue = document.getElementById('inputValue')
let id = 0
let button = document.getElementById('submit')

function SubmitHandler() {
    if (inputValue.value == "") {
        alert("Please FIll Value")
    }
    else {
        const li = document.createElement('li')
        const text = document.createElement('div')
        const buttons = document.createElement('div')
        const h4 = document.createElement('p')
        const DelBtn = document.createElement('button')
        const EdtBtn = document.createElement('button')
        li.appendChild(text)
        text.appendChild(h4)
        h4.textContent = inputValue.value
        DelBtn.textContent = "Delete"
        EdtBtn.textContent = "Edit"
        ul.appendChild(li)
        li.setAttribute('id', `${id += 1}`)
        text.setAttribute('class','checked')
        DelBtn.setAttribute('onclick', `DeleteBtn('${id}')`)
        EdtBtn.setAttribute('onclick', `EditBtn('${id}')`)
        h4.setAttribute('id', 'change')
        li.appendChild(buttons)
        buttons.appendChild(DelBtn)
        buttons.appendChild(EdtBtn)
        inputValue.value = ""
        // function checking(){
        //     alert("ok")
        // }
        
        
    }
}
ul.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        // e.target.classList.toggle("checked")
        console.log()
        e.target.classList.toggle("checked")
    }
},false)
function DeleteBtn(val) {
    const li = document.getElementById(val)
    li.remove()
}

function EditBtn(val) {
    const li = document.getElementById(val)
    inputValue.value = li.firstChild.textContent
    button.textContent = "Edit"
    button.setAttribute('onclick', `NewEdtBtn('${val}')`)
}
function NewEdtBtn(val) {
    const li = document.getElementById(val)
    const h4 = document.getElementById('change')
    console.log(li)
    console.log(li[0])
    h4.textContent = inputValue.value
    console.log(li.firstChild.textContent)
    button.setAttribute('onclick', `SubmitHandler()`)
    button.textContent = "Submit"
    inputValue.value = ""
}

