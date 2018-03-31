import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './header/Header';

class App extends Component {
  // Part of API Login Procedure
  componentDidMount(){ 
    try{
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
         hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      // Set Access Tokens, Get Profile and Forward User to Main App
      new Promise((resolve, reject) => {
        this.props.dispatch(actions.set_tokens(hashParams));  
        resolve();
      })
      .then(()=>{
        this.props.dispatch(actions.get_profile(this.props.state.access_token));  
        this.props.history.push('/SearchResults');
      })
    }
    catch(err){
      window.location.replace("http://localhost:8888");
    }
  }

  render() {
    
    return (
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  state
})

export default connect(mapStateToProps)(App);


  // // retrieve access token and user id
  // getIds = () => { 
  //   const ids = {
  //     token: this.props.state.access_token,
  //     user: this.props.state.id
  //   } 
  //   return ids;
  // }

  // // Check App State in Console
  // showState = () => {
  //   console.log(this.props.state);
  // }

  // getPlaylists = () => {
  //   this.props.dispatch(actions.get_playlists(this.props.state.access_token));
  // }

  // getPlaylistTracks = () => {
  //   let id = this.getIds();
  //   this.props.dispatch(actions.get_playlist_tracks(id.token, '5BzivFb136jUvAIkuCFDZC' , id.user))
  // }

  // getFeaturedPlaylists = () => {
  //   let id = this.getIds();
  //   this.props.dispatch(actions.get_featured_playlists(id.token));
  // }
