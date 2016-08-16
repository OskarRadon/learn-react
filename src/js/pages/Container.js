import React from "react";
import { Link } from "react-router";

export default class Container extends React.Component {
	render() {
		return (
			<main>
				<nav>
					<Link onlyActiveOnIndex to="/" activeStyle={{color:'red'}}>Blog</Link>
					<Link to="about" activeStyle={{color:'red'}}>About</Link>
				</nav>
				{this.props.children}
			</main>
		)
	}
}