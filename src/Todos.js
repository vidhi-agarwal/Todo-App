import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map(t => {
			return (
				<div
					key={t.id}
					className='collection-item'
					onClick={() => {
						deleteTodo(t.id);
					}}>
					<span>{t.content}</span>
				</div>
			);
		})
	) : (
		<p className='center'>You have completed all of your todos!</p>
	);
	return <div className='Todos collection'>{todoList}</div>;
};

export default Todos;
