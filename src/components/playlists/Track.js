import React from 'react';
import '../../css/track.css';

export default class Track extends React.Component{
	render(){
		return (
			<div className="track-wrapper">
				<div className="index">{this.props.index + 1}</div>
				<audio controls>
					<source src={this.props.preview}></source>
				</audio>
			</div>
		)
	}
}