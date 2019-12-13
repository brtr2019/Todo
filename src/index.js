import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = (props) => {

	return (
		<ul>
			<li>React</li>
			<li>Java</li>
		</ul>
	)
}

const AppHeader = () => {
	return <h1> My Todo List</h1>
}

const SearchPanel = () => {

	const searchText = "Search Here";
	const searchStyle = {
		fontSize: '12px',
	}
	return <input type="text" style={searchStyle} placeholder={searchText} />
}

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
