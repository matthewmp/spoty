import React from 'react';
import '../css/tile.css';
import { connect } from 'react-redux';

import { get_playlist_tracks } from '../actions';

class Tile extends React.Component{

	fetchPlaylistTracks = (playlistId) => {
		let token = this.props.state.access_token;
		let ownerid = this.props.ownerid;
		let playlistid = this.props.playlistid;
		
		new Promise((resolve, reject) => {
			this.props.dispatch(get_playlist_tracks(token, playlistid, ownerid));
			resolve();	
		})
		.then((results) => {
			

		})
		
	}

	render(){
		return (
			<div className="tile" 
				playlistid={this.props.playlistid}
				ownerid={this.props.ownerid}
				onClick={this.fetchPlaylistTracks}
			>
				<img src={this.props.img} alt="" />
				<div className="tile-details">
					<span className="tile-meta">
						{this.props.playlistName}
					</span>
					<span className="tile-meta">
						tracks: {this.props.totalTracks}
					</span>
				</div>
		   </div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	state
})

export default connect(mapStateToProps)(Tile);