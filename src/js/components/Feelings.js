import React from "react";


export default class Feelings extends React.Component {
	render() {
		return (
			<div>
				<h1>I'm feeling {this.props.emotion}</h1>
				<input />
				<p>Enter your feelings here</p>
			</div>
		)
	}
}