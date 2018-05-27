import React from 'react';
import { connect } from 'react-redux';
import '../../css/playlist-details.css'

import Track from './Track';
import TrackUnavailable from './TrackUnavailable';

class PlayListDetails extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			details: null
		}
	}

	closeDetails = () => {
		this.setState({
			details: null
		})
	}

	render(){
		let images;
		let tracks;
		if(this.props.images){
			images = this.props.images.length > 0 ? this.props.images[0].url : undefined;	
		}

		try {
			tracks = this.props.state.selectedPlaylistTracks.map((track, ind) => {
				let availableTracks = track.track.preview_url ? 
				<Track preview={track.track.preview_url} key={ind} index={ind} />	: 
				<TrackUnavailable key={ind} index={ind} />
				return availableTracks;				
			});
		}
		catch(err){console.log('Error Getting Tracks')};
		
		return(
			<div className="overlay">
			<div className="card-wrapper">
				<div className="x-close" onClick={this.props.close}>X</div>
				<div className="card">
					<div className="card-header">
						<div className="card-img-wrapper">
						  <img src={images} />
						</div>
						<p className="title">{this.props.name}</p>
					</div>

					<div className="card-body">
						{tracks}
					</div>
				</div>
			</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state
})

export default connect(mapStateToProps)(PlayListDetails);