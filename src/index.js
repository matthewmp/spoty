import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Header from './components/header/Header';
import PlaylistSearchMenu from './components/playlists/Playlist_SearchMenu';
import FeaturedPlaylists_View from './components/playlists/FeaturedPlaylists_View';

import store from './store';


ReactDOM.render(
		<Provider store={store}>
			<Router>
				<div>
					<Header />
					<PlaylistSearchMenu />
					<Route exact path="/" component={App} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/featured-playlists" component={FeaturedPlaylists_View} />
				</div>	
			</Router>
		</Provider>, document.getElementById('root')
	);

