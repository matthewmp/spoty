import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import SearchResults from './components/SearchResults';
import Header from './components/header/Header';

import store from './store';


ReactDOM.render(
		<Provider store={store}>
			<Router>
				<div>
					<Header />
					<Route exact path="/" component={App} />
					<Route exact path="/SearchResults" component={SearchResults} />
				</div>	
			</Router>
		</Provider>, document.getElementById('root')
	);

