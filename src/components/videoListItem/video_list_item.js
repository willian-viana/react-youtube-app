import React from 'react';
import { VideoItemImage, VideoItemList } from './style';

const VideoListItem = ({video, onVideoSelect}) => {
    const imgUrl = video.snippet.thumbnails.default.url;

    return ( 
        <VideoItemList onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <VideoItemImage className="media-object" src={imgUrl} alt=""/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>

        </VideoItemList>
    );
};

export default VideoListItem;