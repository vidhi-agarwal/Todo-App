import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddTodo';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ id: 1, content: `Keep Studying ` },
				{ id: 2, content: `Learn React` },
				{ id: 3, content: `Learn node.js` },
				{ id: 4, content: `Learn Angular` },
				{ id: 5, content: `Learn Express` },
				{ id: 6, content: `Learn CSS/Bootstrap/Materialize` },
				{ id: 7, content: `Learn MongoDB` }
			]
		};
		this.deleteTodo = this.deleteTodo.bind(this);
		this.addTodo = this.addTodo.bind(this);
	}

	deleteTodo(id) {
		console.log(`deleting todo`);
		console.log(this.state.todos.filter(t => id === t.id));
		const todos = this.state.todos.filter(t => id !== t.id);
		this.setState({
			todos: todos
		});
	}

	addTodo(newTodo) {
		newTodo.id = Math.random();
		const newTodoList = [...this.state.todos, newTodo];
		this.setState({ todos: newTodoList });
	}

	render() {
		return (
			<div className='App container'>
				<h1 className='center red-text text-darken-2'>Todo List</h1>
				<h5 className='center red-text text-lighten-3'>
					Click on the completed todo's
				</h5>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
