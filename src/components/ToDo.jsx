import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function ToDo() {

    const [todos, setTodos] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:3000/todos")
            .then((res) => res.json())
            .then((items) => setTodos(items))
        },
        []
    )
    
    //add new item and refresh component
    function addItem(item){
        const newTodos = [...todos, item]
        setTodos(newTodos)
    }

    // Delete Item & Update todo items
    // Passed to TodoList prop
    function deleteItem(deletedItem){
        const updatedTodos = todos.filter((item) => item.id !== deletedItem.id)
        setTodos(updatedTodos)
    }

    // Update Todo Item
    // Updates checked Boxes
    function updateTodos(updatedItem){
        const updatedTodos = todos.map((todo) => {
            if (todo.id === updatedItem.id){
                return updatedItem
            } else {
                return todo
            }
        })
        setTodos(updatedTodos)
    }

    return (
        <div className="container">
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card px-3">
                                <div className="card-body">
                                    <h4 className="card-title">Awesome Todo list</h4>
                                    <TodoForm addItem={addItem}/>
                                    <TodoList items={todos} deleteItem={deleteItem} updateTodos={updateTodos}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDo;