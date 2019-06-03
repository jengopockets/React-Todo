import React from 'react';
import './Todo.css';
const TodoForm = props => {
    return (
        <form className={`form`}>
            <input onChange={props.handleTodoChange} type="text" name="todo" value={props.value} placeholder="Add Todo Here" />
            <div>
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.handleClearTodos}>Clear Selected</button>
            </div>
            <input onChange={props.handleSearch} type="text" name="search" placeholder="...Search" />
        </form>
    );
};

export default TodoForm;