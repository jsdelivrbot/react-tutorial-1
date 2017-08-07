import React from 'react';

// ({video}) is the same as writing
// const video = props.video; within VideoListItem
const VideoListItem = ({video, onVideoSelect}) => {
	const imageURL = video.snippet.thumbnails.default.url;
	const heading = video.snippet.title;

	return (
		<li onClick={() => onVideoSelect(video)}  className="list-group-item">
			<div className="video-list media">

				<div className="media-left">
					<img className="media-object" src={imageURL} />
				</div>

				<div className="media-body">
					<div className="media-heading">
						{heading}
					</div>
				</div>

			</div>
		</li>
	);
};

export default VideoListItem;