import React from 'react';
import { IndexLink } from 'react-router';

export default class Container extends React.Component {
	render() {
		return (
			<main>
				<nav>
					<IndexLink to='/' activeClassName='active'>Blog</IndexLink>
					<IndexLink to='about' activeClassName='active'>About</IndexLink>
					<IndexLink to='todo' activeClassName='active'>To Do List</IndexLink>
				</nav>
				{this.props.children}
			</main>
		);
	}
}