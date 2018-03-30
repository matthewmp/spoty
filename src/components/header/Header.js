import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import '../../css/header.css';
import SearchInput from './SearchInput';
import User from './User';

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	onSubmitForm = (e) => {
		e.preventDefault();
		console.log('submit')
		this.child.onSubmitForm();
	}

	render(){
		return (
			<header className="main-header">
				<SearchInput token={this.props.token} />
				<User />
			</header>
		);
	}
}

const mapStateToProps = (state, props) => ({
	state
});

export default connect(mapStateToProps)(Header);