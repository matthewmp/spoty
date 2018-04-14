import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';



class SearchInput extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		}
	}

	onSubmitForm = (e) => {
		e.preventDefault();
		this.props.history.push('/search');
		this.submitSearchTerm();
	}

	submitSearchTerm = () => {
		console.log('Searching');
		let token = this.props.state.access_token;
		this.props.dispatch(actions.searchTrack(token, this.state.term));
	}

	onInputChange = (e) => {
		this.setState({
			term: e.target.value
		})
	}

	render(){
		return(
			<div>
			<form className="search-form" onSubmit={this.onSubmitForm}>
				 
				    <input
				      id="inp-search"
				      value={this.props.value}
				      onChange={this.onInputChange}
				    />
				   
				  
				    <button 
				      className="btn-search"
				      onClick={this.onSubmitForm}
				     > 
				     Submit 
				     </button>
				   
			</form>
			</div>
		)
	}
  
};

const mapStateToProps = (state, props) => ({
	state
});

export default withRouter(connect(mapStateToProps)(SearchInput));