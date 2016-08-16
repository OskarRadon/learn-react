import React from "react";
import Feelings from "../components/Feelings"

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			emotion: "good",
		};
	}
	moodSwing(emotion) {
		this.setState({emotion});
	}

	render() {
		return (
			<main>
				<h1>Hey I'm Oskar</h1>
				<Feelings moodSwing={this.moodSwing.bind(this)} emotion={this.state.emotion}/>
			</main>
		)
	}
}