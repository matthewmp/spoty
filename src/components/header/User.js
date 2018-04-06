import React from 'react';
import { connect } from 'react-redux';

import '../../css/user.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';

class User extends React.Component{
	
	render(){
		return(
		<div className="user">
			<span>Hey {this.props.state.name}!</span>
			<MuiThemeProvider>
				<Avatar
		          src={this.props.state.img_url}
		          size={75}
		        />
		    </MuiThemeProvider>
		</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state
})

export default connect(mapStateToProps)(User);