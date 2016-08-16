import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout"
import Blog from "./pages/Blog"
import About from "./pages/About"

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}> 
		<Route path="/" component={Layout}>
		</Route>
	</Router>,
app);