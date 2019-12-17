import React from 'react';
import {TodoListItem} from './todo-list-item';

export const TodoList = () => {

	return (
		<ul>
			<li><TodoListItem label="React" /></li>
			<li><TodoListItem label="Javascript" important="!!!"/></li>
		</ul>
	)
}
