//Selectors
const filteropt = document.querySelector(".filter-todo")
const todoinput = document.querySelector(".todo_input")
const todobtn = document.querySelector(".todo_btn")
const todolist = document.querySelector(".todo-list")

//EventListeners
todobtn.addEventListener("click", addtodo)
filteropt.addEventListener("click" , filtertodo)

//Functions
function addtodo(e){
    e.preventDefault()
    addnewtodo()
    clearinput()
}

function trashtodo(e){
    let item = e.target
    let todo = item.parentElement
    todo.classList.add("fall")
    todo.addEventListener('transitionend' , function (){
        todo.remove()
    })
}

function checktodo(e){
    let item = e.target
    let todo = item.parentElement
    todo.classList.toggle("completed")
}

function clearinput(){
    todoinput.value = ""
}

function addnewtodo(){
    //console.log(todoinput.value)
    
    //Create to do div
    const tododiv = document.createElement('div')
    tododiv.classList.add('todo')

    //Create li
    const newtodo = document.createElement('li')
    newtodo.innerText = todoinput.value
    newtodo.classList.add('todo-item')

    //Append to created div
    tododiv.appendChild(newtodo)
    
    //Create check button
    const check = document.createElement('button')
    check.innerHTML = '<i class="fas fa-check"></i>'
    check.classList.add('checkbtn')

    //Create trash button
    const trash = document.createElement('button')
    trash.innerHTML = '<i class="fas fa-trash"></i>'
    trash.classList.add('trashbtn')

    //Append to created div
    tododiv.appendChild(check)
    tododiv.appendChild(trash)

    todolist.append(tododiv)

    check.addEventListener('click' , checktodo)
    trash.addEventListener('click' , trashtodo)
}

function filtertodo(e){
    let todo = todolist.childNodes
    console.log(todo)
}