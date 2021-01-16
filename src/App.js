import React from "react";
import { render } from "react-dom";
import "./App.css";
import { Switch, Router } from "react-router";
import Nav from "./components/layout/Navbar";
import { getStore } from "./store";
import { Provider } from "react-redux";

//import Page1 from './page1';
//import Page2 from './page2';
//import Page3 from './page3';

// function App() {
// 	return (
// 		<div className="App">
// 			<h3>New Project</h3>
// 			<h4>What a pleasent day</h4>
// 		</div>
// 	);
// }

// export default App;

const store = getStore();

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [],
		};
	}

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Nav users={this.state.users} />
					{/* <h2>Muneeb</h2> */}
					{/* <Users users={this.state.users} /> */}
				</div>
			</Provider>
		);
	}
}

{
	/* <Router>
	<div>
		<Nav />
		<Switch>
			<Route exactly component={Landing} pattern="/" />
			<Route exactly component={Page1} pattern="/path1" />
			<Route exactly component={Page2} pattern="/path2" />
			<Route exactly component={Page3} pattern="/path3" />
			<Route component={Page404} />
		</Switch>
	</div>
</Router>; */
}
