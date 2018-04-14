import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


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
      this.props.dispatch(actions.set_tokens(hashParams));  
    }
    // Bring Back to Login Screen on Error
    catch(err){
     window.location.replace("http://localhost:8888");
    }

    // Get / Set User Profile
    this.props.dispatch(actions.get_profile (hashParams.access_token));
    // Redirect to Featured Playlists
    this.props.history.push('/my-playlists');
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