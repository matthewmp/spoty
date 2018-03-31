import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import '../../css/header.css';
import SearchInput from './SearchInput';
import User from './User';

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			token: this.props.state.access_token,
			name: this.props.state.name
		}
	}

	getIds = () => { 
	    const ids = {
	      token: this.props.state.access_token,
	      user: this.props.state.id
	    } 
	    return ids;
    }

	onSubmitForm = (e) => {
		e.preventDefault();
		console.log('submit')
		this.child.onSubmitForm();
	}

	componentDidMount(){
		console.log('Mounting: ', this.props.state)
		let ids = this.getIds();
		if(this.props.state.access_token){
			this.props.dispatch(actions.get_profile(this.props.state.access_token));	
		}else {
			console.log('Header Cant Get TOkens')
		}
    	
	}

	render(){
		let users = this.props.state.name ? <User name={this.state.named}/> : undefined;
		console.log('Header: ', this.props.state);
		return (
			<header className="main-header">
				<SearchInput token={this.props.token} />
				{users}
			</header>
		);
	}
}

const mapStateToProps = (state, props) => ({
	state
});

export default connect(mapStateToProps)(Header);