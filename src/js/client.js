import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Container from "./pages/Container";
import Blog from "./pages/Blog";
import About from "./pages/About";

const app = document.getElementById("app");

const NotFound = () => (
	<h1>404 This page doesn't exist!</h1>
);

ReactDOM.render(
	<Router history={hashHistory}> 
		<Route path="/" component={Container}>
			<IndexRoute component={Blog}></IndexRoute>
			<Route path="about" component={About}></Route>
			<Route path='*' component={NotFound} />
		</Route>
	</Router>,
app);