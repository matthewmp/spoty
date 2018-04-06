import React from 'react';
import { connect } from 'react-redux';

import Header from './header/Header';

class SearchResults extends React.Component{
	render(){
		console.log('SearchResults: ', this.props.state)
		return (
			<div className="view-search-results">
				<h2>SearchResults</h2>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state
});

export default connect(mapStateToProps)(SearchResults);	