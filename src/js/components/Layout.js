import React from "react";


export default class Layout extends React.Component {
	howImFeeling() {
		return "happy";
	}

	render() {
		return (
			<h1>I'm feeling {this.howImFeeling()}</h1>
		)
	}
}