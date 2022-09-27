import React from 'react'

export default function TodoList() {
    return (
        <div class="list-wrapper">
            <ul class="d-flex flex-column-reverse todo-list">
                <li>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="checkbox" type="checkbox"/> For what reason would it be advisable. <i class="input-helper"></i>
                        </label> 
                    </div>
                    <i class="remove mdi mdi-close-circle-outline"></i>
                </li>
                <li class="completed">
                    <div class="form-check"> 
                        <label class="form-check-label"> 
                            <input class="checkbox" type="checkbox" checked=""/> 
                            For what reason would it be advisable for me to think. 
                            <i class="input-helper"></i>
                        </label>
                    </div>
                    <i class="remove mdi mdi-close-circle-outline"></i>
                </li>
                <li>
                    <div class="form-check"> 
                        <label class="form-check-label"> 
                            <input class="checkbox" type="checkbox"/> 
                            it be advisable for me to think about business content? 
                            <i class="input-helper"></i>
                        </label> 
                    </div>
                    <i class="remove mdi mdi-close-circle-outline"></i>
                </li>
                                            
            </ul>
        </div>
    )
}
