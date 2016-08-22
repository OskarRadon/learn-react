import React from 'react';

import TextInput from '../components/TextInput';

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			inputText: '',
		};
	}

	render() {
		return (
			<main>
				<h1>To Do List:</h1>
				<TextInput inputText={this.state.inputText}/>
			</main>
		);
	}
}