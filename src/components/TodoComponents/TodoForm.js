import React from 'react';
const TodoForm = props => {
    return (
        <form>
            <input onChange={props.handelTodoChange} type="text" name="todo" value={props.value} placeholder="...todo" />
            <button onClick={props.handelAddTodo}>Add Todo</button>
            <button onClick={props.handelClearTodos}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;