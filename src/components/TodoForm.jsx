import React from 'react'

function TodoForm() {
  return (
    <div class="add-items d-flex"> 
        <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?"/> 
        <button class="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> 
    </div>
  )
}

export default TodoForm