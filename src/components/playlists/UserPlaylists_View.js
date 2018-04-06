import React from 'react';
import { connect } from 'react-redux';
import Tile from '../Tile';
import * as actions from '../../actions';
import '../../css/tile.css';

class UserPlaylists_View extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			local: null
		}
	}
	componentDidMount(){
		let token = this.props.state.access_token;
		let user_id = this.props.state.id;
     	
     	this.props.dispatch(actions.get_playlists(token, user_id))
     	
  	};

	render(){
		console.log(this.props.state);
		let playlists = this.props.state.playlists;

		
		console.log('playlists: ', playlists)

		try{
			var user_playlists = playlists.items.map((playlist, index) => {
				var image;
				if(playlist.images.length > 0){
					image = playlist.images[0].url 
				} else {
					image = 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350';
				}
	    		return <Tile 
		    				img={image}
		    				playlistName={playlist.name} 
		    				totalTracks={playlist.tracks.total} 
		    				key={index} 
		    				playlistid={playlist.id}
	    				/>
	    	}) || undefined;
		}

		catch(err){console.log('Error Getting User Playlists: ', err);}
		let playlistsToRender = user_playlists ? user_playlists : <h6>Loading...</h6>
		return(
			<div>
				<h1>My Playlists View</h1>
				<div className="tile-wrapper">
					{playlistsToRender}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state
})

export default connect(mapStateToProps)(UserPlaylists_View);