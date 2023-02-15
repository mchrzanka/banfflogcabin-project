// js
import React from 'react';
import YouTube from 'react-youtube';

export default class YoutubeVideo extends React.Component {
	videoOnReady(event) {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}
	render() {
		const opts = {
			height: '400',
			width: '100%',
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1,
			},
		};

		return (
			<YouTube videoId='yLJyoUcXhRQ' opts={opts} onReady={this.videoOnReady} />
		);
	}
}
