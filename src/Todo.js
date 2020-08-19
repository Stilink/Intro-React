import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
          <div>
              <h1>{this.props.text}</h1>
              <h2>{this.props.priority} - {this.props.dueDate.toString()}</h2>
          </div>
        );
    }
}

