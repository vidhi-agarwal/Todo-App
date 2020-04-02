import React, { Component } from 'react';

class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ''
		};
		this.submitHandler = this.submitHandler.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
	}

	submitHandler(e) {
		e.preventDefault();
		console.log(this.state);
		this.props.addTodo(this.state);
		this.setState({ content: '' });
	}

	changeHandler(e) {
		this.setState({ content: e.target.value });
	}

	render() {
		return (
			<div className='AddForm'>
				<form onSubmit={this.submitHandler}>
					<label htmlFor='content'>Add New Todo</label>
					<input
						value={this.state.content}
						type='text'
						name='content'
						id='content'
						onChange={this.changeHandler}
					/>
				</form>
			</div>
		);
	}
}

export default AddTodo;
