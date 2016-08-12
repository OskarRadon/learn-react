import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {
		const emotion = "happy";
		return (
			<h1>I'm feeling {emotion}</h1>
		)
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);