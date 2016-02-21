import React from "react";
import VideoLIstItem from "./video_list_item";

const VideoLIst = (props) => {
   const videoItem = props.videos.map((video) => {
      return <VideoLIstItem video={video} key={video.etag} />
   });
   return (
      <ul className="video_right_list">
         {videoItem}
      </ul>
   );
}

export default VideoLIst;
