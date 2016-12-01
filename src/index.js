/* External dependencies */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import "../node_modules/semantic/dist/semantic.min.css";

/* Internal dependencies */
import { store,history, DevTools } from "./redux_router_init.js";
import Layout from "./components/layout/layout.js";

import Overview from "./components/main/overview/overview.js";

import Mortgage from "./components/main/mortgage/mortgage.js";
import MortgageSummary from "./components/main/mortgage/mortgage_summary.js";
import MortgageActivity from "./components/main/mortgage/mortgage_activity.js";
import MortgagePromissory from "./components/main/mortgage/mortgage_promissory.js";
import MortgageDeed from "./components/main/mortgage/mortgage_deed.js";

import Property from "./components/main/property/property.js";

import Messages from "./components/main/messages/messages.js";

import MyAccount from "./components/main/myaccount/myaccount.js";

import Statement from "./components/main/statement/statement.js";

import "./index.css";

// A router with enhanced history nested in an immutable, location-aware
// redux state provider
class RootClass extends React.Component {
	render() {
		return (
			<IntlProvider locale="en">
				<Router history={history}>
					<Route path="/" component={Layout}>
						<IndexRoute component={Overview}></IndexRoute>
						<Route path="/overviewPrimary" name="overviewPrimary" component={Overview}></Route>
						<Route path="/mortgagePrimary" name="mortgagePrimary" component={Mortgage}>
							<Route path="/mortgageSummary" name="mortgageSummary" component={MortgageSummary}></Route>
							<Route path="/mortgageActivity" name="mortgageActivity" component={MortgageActivity}></Route>
							<Route path="/mortgagePromissory"  name="mortgagePromissory" component={MortgagePromissory}></Route>
							<Route path="/mortgageDeed"  name="mortgageDeed" component={MortgageDeed}></Route>
						</Route>
						<Route path="/propertyPrimary" name="propertyPrimary" component={Property}></Route>
						<Route path="/messagesPrimary" name="messagesPrimary" component={Messages}></Route>
						<Route path="/accountPrimary" name="accountPrimary" component={MyAccount}></Route>
						<Route path="/statementPrimary" name="statementPrimary" component={Statement}></Route>
					</Route>
				</Router>
			</IntlProvider>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
			<RootClass />
	</Provider>,
	document.getElementById("root")
);