import React from 'react';
import { withRouter } from 'react-router-dom';

import '../../css/playlist-menu.css';

class Playlist_SearchMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			myPlaylist: true,
			search: false
		}
	}
	
	selectMyPlaylistMode = () => {
		this.setState({
			myPlaylist: true,
			search: false
		});
		this.props.history.push('/my-playlists');
	};

	selectSearchMode = () => {
		this.setState({
			myPlaylist: false,
			search: true
		});
		this.props.history.push('/search')
	}

	componentDidMount(){
		const hash = this.props.location.pathname;
		if(hash === '/search'){
			this.selectSearchMode();
		} else if(hash === '/my-playlists'){
			this.selectMyPlaylistMode();	
		}
	}

	render(){
		const myPlaylistClass = this.state.myPlaylist ? 'selected' : 'not-selected';
		const searchClass = this.state.search ? 'selected' : 'not-selected';
		return(
			<div className="playlistMenu">
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