import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import ItemAddForm from './components/item-add-form/item-add-form';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';
import './index.css';

class App extends Component {

	
	state = {
		todoData:[
			{ label: 'Drink Coffee', important: false,done:false, id: 1 },
			{ label: 'Make Awesome App', important: false,done:false, id: 2},
			{ label: 'Have a lunch', important: false,done:false, id: 3}
		]
	}

	//maxId = Object.keys(this.state.todoData).length+1;
	maxId = 100;
	
	deleteItem=(id)=>{
		this.setState(({todoData})=>{
			const idx = todoData.findIndex((el)=>el.id===id);

			const newArray = [...todoData.slice(0,idx),...todoData.slice((idx+1))];
			return {
				todoData:newArray
			}
		})
	}

	addItem=(text)=>{
		const newItem = {
			label: text,
			important: false,
			id: this.maxId++
		}

		this.setState(({todoData})=>{
				return {
					todoData: [...todoData,newItem]
				} 
		})
		
	}

	onToggleImportant=(label)=>{
		console.log('important'+label);
	}

	onToggleDone=(label)=>{
		console.log('done'+label);
	}
	render(){		
		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList todos={this.state.todoData} onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>
				<ItemAddForm addItem={this.addItem} />
			</div>
		);
	}  
}
ReactDOM.render(<App />,
  document.getElementById('root'));