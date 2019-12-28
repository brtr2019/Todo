import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import ItemAddForm from './components/item-add-form/item-add-form';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';
import './index.css';

class App extends Component {
    //maxId = Object.keys(this.state.todoData).length+1;
	maxId = 100;
	
	state = {
		todoData:[
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Have a lunch')
		]
	}

	createTodoItem(label){
		return {
			label,
			important: false,
			done:false,
			id: this.maxId++
		}
	}
	
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
		const newItem = this.createTodoItem(text);
		this.setState(({todoData})=>{
				return {
					todoData: [...todoData,newItem]
				} 
		})
		
	}

	onToggleImportant=(id)=>{
		console.log('important'+id);
	}

	onToggleDone=(id)=>{
		this.setState(({todoData})=>{
			const idx = todoData.findIndex((el)=>el.id===id);
			console.log('You choose: '+idx);
			
			// 1 обновить объект
			const oldItem = todoData[idx];
			//обновляется(создается) массив newItem с done:true
			const newItem = {...oldItem,done: !oldItem.done};
			console.log(newItem);
			// 2 construct new array
			const newArray = [...todoData.slice(0,idx),newItem,...todoData.slice((idx+1))];
			console.log()
			return {
				todoData: newArray
			}
		})
	}
	render(){		
		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList todos={this.state.todoData} onDeleted={this.deleteItem} 
						  onToggleImportant={this.onToggleImportant} 
				 		  onToggleDone={this.onToggleDone}/>
				<ItemAddForm addItem={this.addItem} />
			</div>
		);
	}  
}
ReactDOM.render(<App />,
  document.getElementById('root'));