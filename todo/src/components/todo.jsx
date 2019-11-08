import React, {Component} from 'react';
import TodoList from './todolist';

class TodoApp extends Component {
    state = {
        items: [],
        text: ''
    }

    handleChange= (e) => {
        this.setState({text: e.target.value});
    }

    handleSubmit= (e) => {
        e.preventDefault();
        if(!this.state.text.length) {
            return;
        }
    const newItem = {
        text: this.state.text,
        id: Date.now()
    };
    this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
    }));
    }
    render() { 
        return ( 
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='new-todo'>
                        What Needs to be done?
                    </label> <br/>
                    <input id='new-todo' onChange={this.handleChange} value={this.state.text}/>
                    <button>
                        Add #{this.state.items.length+1}
                    </button>
                </form>
            </div>
         );
    }
}
 
export default TodoApp;