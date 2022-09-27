import React, { useState } from 'react'

function TodoForm({addItem}) {
    const [input, setInput] = useState("")
    function handleSubmit(event){
        event.preventDefault()
        
        const newItem = {
            title: input,
            complete: false
        }

        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newItem)
        })
        .then((res) => res.json())
        .then((item) => addItem(item))
        
    }
    return (
        <div className="add-items d-flex" onSubmit={handleSubmit}> 
            <input type="text" onChange={(e) => setInput(e.target.value)} className="form-control todo-list-input" placeholder="What do you need to do today?"/> 
            <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={handleSubmit}>Add</button> 
        </div>
    )
}

export default TodoForm