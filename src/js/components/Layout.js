import React from "react";

import Feelings from "./Feelings"


export default class Layout extends React.Component {
	render() {
		const emotion = "fantastic"

		return (
			<main>
				<h1>Hey I'm Oskar</h1>
				<Feelings emotion={emotion}/>
			</main>
		)
	}
}