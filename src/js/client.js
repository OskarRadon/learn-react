import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {

	howImFeeling() {
		return "happy";
	}

	render() {
		return (
			<h1>I'm feeling {this.howImFeeling()}</h1>
		)
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);