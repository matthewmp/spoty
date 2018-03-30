import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './header/Header';



class App extends Component {

  // retrieve access token and user id
  getIds = () => { 
    const ids = {
      token: this.props.state.access_token,
      user: this.props.state.id
    } 
    return ids;
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

  getFeaturedPlaylists = () => {
    let id = this.getIds();
    this.props.dispatch(actions.get_featured_playlists(id.token));
  }

  // Part of API Login Procedure
  componentDidMount(){ 
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    new Promise((resolve, reject) => {
      this.props.dispatch(actions.set_tokens(hashParams));  
      resolve();
    })
    .then(() => {
      this.getProfile();
    })
    
    

  }

  render() {
    this.showState();
    return (
      <div className="App">
        <Header token={this.getIds} profile={this.getProfile} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  state
})

export default connect(mapStateToProps)(App);


