import React from 'react';

export default class TextInput extends React.Component {
	render() {
		return (
			<div>
				<input type="text" placeholder="Add a task" value={this.props.inputText}/>
				<button>Add</button>
			</div>
		);
	}
}