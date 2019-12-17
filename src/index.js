import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './components/todo-list';
import {AppHeader} from './components/app-header';
import {SearchPanel} from './components/search-panel';





const App = () => {
	const isLogged = true;
	//const loginBox = <span>Log in please</span>
	return (
		<div>
			{isLogged && (new Date().toLocaleString("ru-RU"))}
			<AppHeader />
			<SearchPanel />
			<TodoList />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
