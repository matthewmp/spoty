import React from 'react';
import { connect } from 'react-redux';

class SearchResults extends React.Component{
	render(){
		
		return (
			<div className="view-home">
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state
});

export default connect(mapStateToProps)(SearchResults);	