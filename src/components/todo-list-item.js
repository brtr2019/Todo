import React from 'react';
// используется деструктуризация
export const TodoListItem =({label,important=false})=>{

	const style = {
		color: important? 'tomato':'black'
	}
	return <span style={style}>{label}</span>
}