import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class FeaturedPlaylists_View extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			featuredPlaylists: null
		}
	}

	componentDidMount(){
     	this.props.dispatch(actions.get_featured_playlists(this.props.state.access_token));
  	};

	render(){
		let featuredPlaylists = this.props.state.featuredPlaylists;
		try{
			var playlists = featuredPlaylists.playlists.items.map((playlist, index) => {
	    		return <div key={index}>
							{playlist.name}
							<img src={playlist.images[0].url} alt="" />
							total tracks: {playlist.tracks.total}
					   </div>
	    	});
		}
		catch(err){console.log('Error Getting Featured');}
		let playlistsToRender = playlists ? playlists : <h6>Loading...</h6>
		return(
			<div>
				<h1>Featured Playlists View</h1>
				<button onClick={this.func}>Button</button>
				{playlistsToRender}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state
})

export default connect(mapStateToProps)(FeaturedPlaylists_View);