import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function ToDo() {
  return (
    <div class="container">
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row container d-flex justify-content-center">
                    <div class="col-md-12">
                        <div class="card px-3">
                            <div class="card-body">
                                <h4 class="card-title">Awesome Todo list</h4>
                                <TodoForm/>
                                <TodoList/>
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