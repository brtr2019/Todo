import React from 'react';
import {TodoListItem} from './todo-list-item';

export const TodoList = ({todos}) => {


	const elements = todos.map((item,key)=>{
		const {id,...itemProps} = item;
		
		return(
			<li key={id}><TodoListItem {...itemProps} /></li>
		)
		
	});


	return (
		<ul className="list-group">
			{elements}
		</ul>
	)
}
