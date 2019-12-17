import React from 'react';
export const SearchPanel = () => {

	const searchText = "Search Here";
	const searchStyle = {
		fontSize: '12px',
	}
	return <input type="text" style={searchStyle} placeholder={searchText} />
}