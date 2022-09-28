import React from 'react'

export default function TodoList({items, deleteItem, updateTodos}) {

    // Item delete function
    // Uses deleteItem to update the todos list (ToDo.jsx: line 26)
    // Handled by onClick event handler (line 25)
    function handleDelete(todo){
        fetch(`http://localhost:8001/todos/${todo.id}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then(() => deleteItem(todo))
    }

    // Updating Item - Checking checkbox
    function handleCheck(item){
        fetch(`http://localhost:8001/todos/${item.id}`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({
                complete: !item.complete
            })
        })
        .then((res) => res.json())
        .then((updatedItem) => updateTodos(updatedItem))
    }

    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list">
                {items.map((item) => 
                    <li key={item.id}>
                        <div className={`form-check ${item.complete ? "italics" : ""}`}>
                            <label className="form-check-label">
                                <input
                                 className="checkbox" 
                                 type="checkbox" 
                                 defaultChecked={item.complete}
                                 onClick={() => handleCheck(item)}
                                />

                                {item.title}
                                <i className="input-helper"></i>
                            </label> 
                        </div>
                        <i className="remove mdi mdi-close-circle-outline" onClick={() => handleDelete(item)}></i>
                    </li>
                )}                             
            </ul>
        </div>
    )
}
