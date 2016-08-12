import React from "react";

import Feelings from "./Feelings"


export default class Layout extends React.Component {
	render() {

	let feelingsList = [
		<Feelings />,
		<Feelings />,
		<Feelings />
	]

		return (
			<ul>
				{feelingsList}
			</ul>
		)
	}
}