import React from 'react';
import '../../css/tile.css';
import { connect } from 'react-redux';
import { get_playlist_tracks } from '../../actions';


class Tile extends React.Component{

	fetchPlaylistTracks = (playlistId) => {
		let playlistDetails = this.props.state.playlists.items[this.props.index];
		console.log(playlistDetails);
		return playlistDetails;
		
	}

	render(){
		return (
			<div className="tile" 
				index={`${this.props.index}`}
				playlistid={this.props.playlistid}
				onClick={() => this.props.getIndex(this.props.index)}
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