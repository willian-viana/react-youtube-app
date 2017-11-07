import React from 'react';
import { VideoDetailsContainer } from './style';

const VideoDetails = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-details col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title={video.snippet.title} src={url} className="embed-responsive-item"></iframe>
            </div>
            <VideoDetailsContainer className="details">
                <div>{video.snippet.title}</div>
                <div{...video.snippet.description}></div>
            </VideoDetailsContainer>
        </div>
    )
}

export default VideoDetails;