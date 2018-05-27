import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Header from './components/header/Header';
import UserPlaylists_View from './components/playlists/UserPlaylists_View';
import SearchResults from './components/SearchResults';
import SearchInput from './components/header/SearchInput';
import './css/normalize.css';

import store from './store';


ReactDOM.render(
		<Provider store={store}>
			<Router>
				<div>
					<Header />
					
					<Route exact path="/" component={App} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/my-playlists" component={UserPlaylists_View} />
					<Route exact path="/search" component={SearchResults} />
					<Route exact path="/pl-search" component={SearchInput} />
				</div>	
			</Router>
		</Provider>, document.getElementById('root')
	);

