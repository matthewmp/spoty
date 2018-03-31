import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class SearchInput extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		}
	}

	onSubmitForm = () => {
		let ids = this.props.token();
		this.props.dispatch(actions.searchTrack(ids.token, this.state.term));
	}

	onInputChange = (e) => {
		this.setState({
			term: e.target.value
		})
	}

	render(){
		console.log('SearchInput State: ', this.props.state)
		return(
			<div>
			<form className="search-form" onSubmit={this.onSubmitForm}>
				  <MuiThemeProvider>
				    <TextField
				      hintText="Search"
				      id="inp-search"
				      defaultValue={this.props.value}
				      onChange={this.onInputChange}
				    />
				   </MuiThemeProvider>
				   <MuiThemeProvider>
				    <FlatButton
				      label="submit"
				      primary={true}
				      className="btn-search"
				      onClick={this.onSubmitForm}
				     />
				   </MuiThemeProvider>
			</form>
			</div>
		)
	}
  
};

const mapStateToProps = (state, props) => ({
	state
});

export default connect(mapStateToProps)(SearchInput);