import React from 'react';
import { connect } from 'react-redux';
import PlaylistSearchMenu from './playlists/Playlist_SearchMenu';
import Tile from './playlists/Tile';
import PlayListDetails from './playlists/PlayListDetails';

import * as actions from '../actions';

class SearchResults extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				name: null,
				id: null,
				images: null,
				user_img: null,
				displayDetails: false
			
		}
	}

	getIndex = (index) => {
  		this.props.dispatch(actions.clear_playlist());
  		let info = this.props.state.searchResults.playlists.items[index];
  		this.setState({
  			name: info.name, id: info.id, images: info.images,
  			user_img: this.props.state.img_url,
  			displayDetails: true
  		});
  		let token = this.props.state.access_token;
  		this.props.dispatch(actions.get_playlist_tracks(token, info.id, info.owner.id));
  	}

	// Get Search Results for Artist & Playlists and Returned Shuffled Array
	shuffleResults = () => {
		let artistsArr = this.props.state.searchArtist.artists.items;
		let tracksArr = this.props.state.searchTrack.tracks.items;
		let searchObjects = artistsArr.concat(tracksArr);
		let shuffledResults = [];
		while(searchObjects.length > 0){
			let random = Math.floor(Math.random(0) * searchObjects.length);
			shuffledResults.push(searchObjects.splice(random, 1));
		}
		return shuffledResults;
	}

	closeDetails = () => {
  		this.setState({
  			displayDetails: null
  		})
  	}

	render(){
		let results;
		try{
			const searchResults = this.props.state.searchResults.playlists.items;
			results = searchResults.map((el, index) => {
				if(el.type === 'playlist' && el.images.length > 0){
					let playlist = el;
					let image = playlist.images[0].url;
					return <Tile 
		    				img={image}
		    				playlistName={playlist.name} 
		    				index={index}
		    				key={index} 
		    				playlistid={playlist.id}
		    				getIndex={this.getIndex}
		    				totalTracks={playlist.tracks.total}
	    				/> || undefined
				} 
			})
			
		} catch(err){console.log('No Search', err)}
		let search = results ? results : <h3>No Results</h3>
		let playlistDetails = this.state.displayDetails ? 

		<PlayListDetails 
						name={this.state.name}
						images={this.state.images}
						className={this.state.name}
						avatar={this.state.user_img}
						close={this.closeDetails}
		/> : undefined;
		
		return (
			<div className="playlist-list-wrapper">
				<PlaylistSearchMenu />
				<h2>SearchResults</h2>
				<div className="tile-wrapper">
					{search}
					{playlistDetails}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state
});

export default connect(mapStateToProps)(SearchResults);	