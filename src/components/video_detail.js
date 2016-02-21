import React from "react";

const VideoDetail = ({video}) => {
   if(!video){
      return <div>Loading....</div>;
   }
   const vid_title = video.snippet.title;
   const vid_desc = video.snippet.description;
   const vid_id = video.id.videoId;
   const url = `https://www.youtube.com/embed/${vid_id}`;



   return (
      <div>
         <div className="embed_video_wrapper columns twelve">
            <iframe className="embed_video" src={url}></iframe>
         </div>

         <div className="embed_video_detail columns twelve">
            <h4 className="embed_video_title">{vid_title}</h4>
            <p className="embed_video_desc">{vid_desc}</p>
         </div>
      </div>
   );
};

export default VideoDetail;
