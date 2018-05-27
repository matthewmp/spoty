import React from 'react';
import '../../css/track.css';

export default class TrackUnavailable extends React.Component{
	render(){
		return (
			<div className="track-wrapper">
				<div className="index">{this.props.index + 1}</div>
				<p>Track Unavailable</p>
			</div>
		)
	}
}