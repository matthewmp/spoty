import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';


class App extends Component {
  constructor(props){
    super(props);
   
  }

  componentDidMount(){
    console.log('Mount')
     var hashParams = {};
          var e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          this.props.dispatch(actions.set_tokens(hashParams));
  }

  showState = () => {
    console.log(this.props.state);
  }
  

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.showState}>Show State</button>
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


