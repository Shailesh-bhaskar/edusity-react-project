import React, { useRef } from "react"
import './VideoPlayer.css'
import video from '../../assets/gyanodayaSchool.mp4'

export const VideoPlayer = ({playVideo, setPlayVideo}) => {
    const playerContainer = useRef(null);
    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target == playerContainer.current)
        {
            setPlayVideo(false);
            player.current.pause();
            player.current.currentTime = 0;
        }
    }

    return (
        <div className={`video-player  ${playVideo ? '':'hide'}`}  ref={playerContainer} onClick={(e) => closePlayer(e)}>
            <video src={video} autoPlay muted controls ref={player}/>
        </div>
    )
}