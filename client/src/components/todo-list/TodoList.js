import React from "react"
import './TodoList.css'
import TodoItem from "./todo-item/TodoItem";
function TodoList(){
    return(
        <div className="list-container">
            <div className="list-wrapper">
                <div className="heading">
                    <span>T</span>
                    <span>O</span>
                    <span>D</span>
                    <span>O</span>
                    <span></span>
                    <span>L</span>
                    <span>I</span>
                    <span>S</span>
                    <span>T</span>
                </div>
                <div className="list-items">
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                    <TodoItem></TodoItem>
                </div>
                <div className="add-new">
                    <div className="add-new-content">

                    </div>
                    <div className="add-new-button">
                        +
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList;