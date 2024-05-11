let error          = document.querySelector(".error")
let todoInput      = document.querySelector('.todoInput')
let todoButton     = document.querySelector('.todoButton')
let todoList       = document.querySelector('.todoList')
let box            = document.querySelector('.box')
let result         = document.querySelector ('.result')
let i              = 0

todoButton.addEventListener('click' , ()=>{
  if(todoInput.value == '') {
    error.innerHTML = "Please Enter Your ToDo"
  }else {
     
     error.innerHTML = ''
     i++;
     result.innerHTML    = i



    // creating tags 
    let singleTodo      = document.createElement('div')
    let todoSingleInput = document.createElement('input')
    let editBtn         = document.createElement('button')
    let edit            = document.createElement('span')
    let deleteBtn       = document.createElement('button')
   

    
    // append child
    todoList.appendChild(singleTodo)
    singleTodo.appendChild(todoSingleInput)
    singleTodo.appendChild(editBtn)
    editBtn.appendChild(edit)
    singleTodo.appendChild(deleteBtn)
  
    // class list
    singleTodo.classList.add("singleTodo")
    todoSingleInput.classList.add("todoSingleInput")
    editBtn.classList.add('editBtn')
    edit.classList.add('edit','fa-solid' , 'fa-user-pen')
    deleteBtn.classList.add('deleteBtn', 'fa-solid', 'fa-trash-can')
    

    // add content
    todoSingleInput.value = todoInput.value
    todoInput.value       = '' 
    editBtn.innerHTML     = 'Edit'
    editBtn.style         = "font-size:24px;"
    


   //set attribute
   todoSingleInput.setAttribute('readonly','readonly')

   
  //  delete button 
   deleteBtn.addEventListener('click' , ()=>{
    singleTodo.remove()
    i--;
    result.innerHTML    = i

   })
   
  // edit button
  editBtn.addEventListener('click' , ()=>{
    if(editBtn.innerHTML == "Edit"){
      editBtn.innerHTML = "Save"
      editBtn.style     = "color: yellow; font-size:22px;"
      todoSingleInput.removeAttribute('readonly', 'readonly')

    }else {
      editBtn.innerHTML  = "Edit"
      editBtn.style     = "color:#000; font-size:22px;"
      todoSingleInput.setAttribute('readonly','readonly')
    }
  })

  }
})
