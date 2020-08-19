import React from 'react';
import {TodoList} from './TodoList'

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '', priority: '', dueDate: new Date()};
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handlePriorityChange = this.handlePriorityChange.bind(this);
      this.handleDueDateChange = this.handleDueDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-text-todo">
              What needs to be done?  
            </label>
            <input
              id="new-text-todo"
              onChange={this.handleTextChange}
              value={this.state.text}
            />
            <br />
            <label
              htmlFor="new-priority-todo">
                What's the priority?  
            </label>
            <input
              id="new-priority-todo"
              onChange={this.handlePriorityChange}
              value={this.state.priority}
            />
            <br />
            <label
              htmlFor="new-dueDate-todo">
                For which date? 
            </label>
            <input  
              id="new-dueDate-todo"
              type="date" 
              value={this.state.dueDate} 
              onChange={ this.handleDueDateChange } />
            <br />
            <button>
              Add
            </button>
          </form>
          <TodoList todoList={this.state.items}/>
        </div>
      );
    }
  
    handleTextChange(e) {
      this.setState({ text: e.target.value });
    }

    handlePriorityChange(e) {
      this.setState({ priority: e.target.value });
    }

    handleDueDateChange(e) {
      this.setState({ dueDate: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        dueDate: this.state.dueDate,
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: '',
        priority: '',
        dueDate: ''
      }));
    }
  }