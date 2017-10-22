import React from 'react';


const VideoListItem = (props) => {
    const video = props.video;

    const imgUrl = video.snippet.thumbnails.default.url;

    return ( 
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ imgUrl } alt=""/>
                </div>
                <div className="media-body">
                    <div className="media-heding">{ video.snippet.title }</div>
                </div>
            </div>

        </li>
    );
};

export default VideoListItem;