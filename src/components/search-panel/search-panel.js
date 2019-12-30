import React,{Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component{
	state={
		term:''
	}
	onSubmit=(event)=>{
		event.preventDefault();
	}
	onSearchChange=(event)=>{
		const term = event.target.value;
		console.log("Ввел букву "+term);
		this.setState({
            term: term
        });
		this.props.onSearchChange(term);
	}

  render() {
			return (
				<form onSubmit={this.onSubmit}>	
					<input type="text"
										className="form-control search-input"
										placeholder="type to search"
										value={this.state.term}
										onChange={this.onSearchChange}
										/>			
				</form>
									
			);
	}
};
