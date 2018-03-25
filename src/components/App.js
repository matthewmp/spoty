import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';



class App extends Component {

  // retrieve access token and user id
  getIds = () => { 
    const ids = {
      token: this.props.state.access_token,
      user: this.props.state.id
    } 
    return ids;
  }

  // Part of API Login Procedure
  componentDidMount(){ 
     var hashParams = {};
          var e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          this.props.dispatch(actions.set_tokens(hashParams));

  }
  // Check App State in Console
  showState = () => {
    console.log(this.props.state);
  }

  getProfile = () => {
    this.props.dispatch(actions.get_profile(this.props.state.access_token));
  }

  getPlaylists = () => {
    this.props.dispatch(actions.get_playlists(this.props.state.access_token));
  }

  getPlaylistTracks = () => {
    let id = this.getIds();
    this.props.dispatch(actions.get_playlist_tracks(id.token, '5BzivFb136jUvAIkuCFDZC' , id.user))
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.showState}>Show State</button>
          <button onClick={this.getProfile}>Get Profile</button>
          <button onClick={this.getPlaylists}> getPlaylists</button>
          <button onClick={this.getPlaylistTracks}> getPlaylistTRACK</button>
          <h1 className="App-title">Welcome to React</h1>
        

     

        </header>
       
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  state
})

export default connect(mapStateToProps)(App);


