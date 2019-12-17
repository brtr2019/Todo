import React from 'react';
import {TodoListItem} from './todo-list-item';

export const TodoList = ({todos}) => {

	const firstEl = (
		<li><TodoListItem label={todos[0].label} important={todos[0].important} /></li>
	)

	const secEl = (
		<li><TodoListItem label={todos[1].label} important={todos[1].important}/></li> 
	)

	return (
		<ul>
			{firstEl}
			{secEl}
		</ul>
	)
}
