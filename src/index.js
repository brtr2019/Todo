import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './components/todo-list';
import {AppHeader} from './components/app-header';
import {SearchPanel} from './components/search-panel';

const App = () => {
	const isLogged = true;
	const todoData = [
		{label:'DrinkCoffee',important:false},
		{label:'Make AWesome App',important: true},
		{label:'Have a lunch',important: false},
		]
	return (
		<div>
			{isLogged && (new Date().toLocaleString("ru-RU"))}
			<AppHeader />
			<SearchPanel />
			<TodoList todos={todoData}/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
