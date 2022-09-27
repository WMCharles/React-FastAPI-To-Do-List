import React from 'react'

export default function TodoList({items}) {
    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list">
                {items.map((item) => 
                    <li key={item.id}>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="checkbox" type="checkbox"/>{item.title}<i className="input-helper"></i>
                            </label> 
                        </div>
                        <i className="remove mdi mdi-close-circle-outline"></i>
                    </li>
                )}
                                            
            </ul>
        </div>
    )
}
