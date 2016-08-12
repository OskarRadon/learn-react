import React from "react";

import Feelings from "./Feelings"


export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {name: "Oskar"};
	}

	render() {
		setTimeout(() => {
			this.setState({name: "NOT Oskar"})
		}, 2000)
		return (
			<main>
				<h1>Hey I'm {this.state.name}</h1>
				<Feelings />
			</main>
		)
	}
}