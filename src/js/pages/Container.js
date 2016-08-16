import React from "react";
import { Link, IndexLink } from "react-router";

export default class Container extends React.Component {
	render() {
		return (
			<main>
				<nav>
					<IndexLink to="/" activeClassName="active">Blog</IndexLink>
					<IndexLink to="about" activeClassName="active">About</IndexLink>
				</nav>
				{this.props.children}
			</main>
		)
	}
}