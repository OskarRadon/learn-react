import React from "react";


export default class Feelings extends React.Component {
	handleChange(e) {
		const emotion = e.target.value;
		this.props.moodSwing();
	}

	render() {
		return (
			<div>
				<h1>I'm feeling {this.props.emotion}</h1>
				<input onChange={this.handleChange.bind(this)} />
				<p>Enter your feelings here</p>
			</div>
		)
	}
}