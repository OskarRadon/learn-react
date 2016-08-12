import React from "react";


export default class Feelings extends React.Component {
	render() {
		return (
			<h1>I'm feeling {this.props.emotion}</h1>
		)
	}
}