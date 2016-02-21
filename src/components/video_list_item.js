import React from "react";

const VideoLIstItem = (props) => {
   const video = props.video;
   const vid_thumb = props.video.snippet.thumbnails.default.url;
   const vid_title = props.video.snippet.title;
   console.log(video);
   return (
      <li className="list_item ">
         <div className="video_list_media columns twelve">
            <div className="video_list_left columns four">
               <img src={vid_thumb} className="video_thumb" />
            </div>

            <div className="video_text columns eight">
               <h3 className="video_heading">{vid_title}</h3>
            </div>
         </div>
      </li>
   );
}

export default VideoLIstItem;
