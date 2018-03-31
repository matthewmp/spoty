import React from 'react';
import { withRouter } from 'react-router-dom';

import '../../css/playlist-menu.css';

class Playlist_SearchMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			featuredPlaylist: true,
			myPlaylist: false,
			search: false
		}
	}
	
	selectMyPlaylistMode = () => {
		this.setState({
			featuredPlaylist: false,
			myPlaylist: true,
			search: false
		});
		this.props.history.push('/my-playlists');
	};

	selectFeaturedPlaylistMode = () => {
		this.setState({
			featuredPlaylist: true,
			myPlaylist: false,
			search: false
		});
		this.props.history.push('/featured-playlists')
	};

	selectSearchMode = () => {
		this.setState({
			featuredPlaylist: false,
			myPlaylist: false,
			search: true
		});
		this.props.history.push('/search')
	}

	render(){
		const featuredPlaylistClass = this.state.featuredPlaylist ? 'selected' : 'not-selected';
		const myPlaylistClass = this.state.myPlaylist ? 'selected' : 'not-selected';
		const searchClass = this.state.search ? 'selected' : 'not-selected';
		return(
			<div className="playlistMenu">
				<span 
					className={`${featuredPlaylistClass} plMode`}
					onClick={this.selectFeaturedPlaylistMode}
				>
					Featured Playlists
				</span> 
				/  
				<span 
					className={`${myPlaylistClass} plMode `}
					onClick={this.selectMyPlaylistMode}
				>
					My Playlists
				</span>
				/ 
				<span 
					className={`${searchClass} plMode `}
					onClick={this.selectSearchMode}
				>
					Search Results
				</span>
			</div>
		)
	}
}

export default withRouter(Playlist_SearchMenu);