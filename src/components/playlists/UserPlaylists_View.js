import React from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';
import * as actions from '../../actions';
import '../../css/tile.css';
import PlayListDetails from './PlayListDetails';
import PlaylistSearchMenu from './Playlist_SearchMenu';

class UserPlaylists_View extends React.Component{
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

	componentDidMount(){
		let token = this.props.state.access_token;
		let user_id = this.props.state.id;
     	this.props.dispatch(actions.get_playlists(token, user_id))
  	};

  	getIndex = (index) => {
  		this.props.dispatch(actions.clear_playlist());
  		let info = this.props.state.playlists.items[index];
  		this.setState({
  			name: info.name, id: info.id, images: info.images,
  			user_img: this.props.state.img_url,
  			displayDetails: true
  		});
  		let token = this.props.state.access_token;
  		let user_id = this.props.state.id;
  		this.props.dispatch(actions.get_playlist_tracks(token, info.id, info.owner.id));
  	}

  	closeDetails = () => {
  		this.setState({
  			displayDetails: null
  		})
  	}

	render(){
		let playlists = this.props.state.playlists;

		// Render Playlist Tiles
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
		    				index={index}
		    				key={index} 
		    				playlistid={playlist.id}
		    				getIndex={this.getIndex}
	    				/>
	    		}) || undefined;
		}
		
		catch(err){console.log('Error Getting User Playlists: ');}
		let playlistsToRender = user_playlists ? user_playlists : <h6>Loading...</h6>

		let playlistDetails = this.state.displayDetails ? 

		<PlayListDetails 
						name={this.state.name}
						images={this.state.images}
						className={this.state.name}
						avatar={this.state.user_img}
						close={this.closeDetails}
		/> : undefined;
		
		return(
			<div className="playlist-list-wrapper">
				<PlaylistSearchMenu />
				<h1>My Playlists View</h1>
				<div className="tile-wrapper">
					
					{playlistsToRender}
					{playlistDetails}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state
})

export default connect(mapStateToProps)(UserPlaylists_View);