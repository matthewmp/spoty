import React from 'react';
import { connect } from 'react-redux';
import PlaylistSearchMenu from './playlists/Playlist_SearchMenu';
import Tile from './playlists/Tile';

import Header from './header/Header';

class SearchResults extends React.Component{
	// Get Search Results for Artist & Playlists and Returned Shuffled Array
	shuffleResults = () => {
		let artistsArr = this.props.state.searchArtist.artists.items;
		let tracksArr = this.props.state.searchTrack.tracks.items;
		let searchObjects = artistsArr.concat(tracksArr);
		let shuffledResults = [];
		while(searchObjects.length > 0){
			let random = Math.floor(Math.random(0) * searchObjects.length);
			shuffledResults.push(searchObjects.splice(random, 1));
			console.log(shuffledResults);
		}
		console.log('SEARCH OBJ: ', searchObjects)
		return shuffledResults;
	}

	render(){
		let results;
		console.log('SearchResults: ', this.props.state)
		try{
			const searchResults = this.props.state.searchArtist.artists.items;
			console.log('SHUFFLED RESULTS: ', searchResults[0]);
			results = searchResults.map((el, index) => {
				console.log(el.type)
				if(el.type == 'artist' && el.images.length > 0){
					console.log("HEHEHHEHHR");
					let playlist = el;
					let image = playlist.images[0].url;
					return <Tile 
		    				img={image}
		    				playlistName={playlist.name} 
		    				index={index}
		    				key={index} 
		    				playlistid={playlist.id}
		    				getIndex={this.getIndex}
	    				/> || undefined
				} 
			})
			
		} catch(err){console.log('No Search', err)}
		let search = results ? results : <h3>No Results</h3>
		console.log(search);
		return (
			<div className="view-search-results">
				<PlaylistSearchMenu />
				<h2>SearchResults</h2>
				{search}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state
});

export default connect(mapStateToProps)(SearchResults);	