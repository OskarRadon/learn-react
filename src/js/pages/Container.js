import React from "react";
import { Link } from "react-router";

export default class Container extends React.Component {
	render() {
		return (
			<main>
				<nav>
					<Link to="about">About</Link>
					<Link to="/">Blog</Link>
				</nav>
				{this.props.children}
			</main>
		)
	}
}