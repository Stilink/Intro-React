import React from 'react';
import {Todo} from './Todo';


export class TodoList extends React.Component {
    render() {
        let todoList = this.props.todoList.map(todo => 
            <li>
                <Todo text={todo.text}  priority={todo.priority} dueDate={todo.dueDate} />    
            </li>);
        return (
            <ul>
                {todoList}
            </ul>
        );
    }
}