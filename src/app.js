import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoLIst from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyCQbnMnzWrlPxDZxpUkYdCBaoSbQwqBBd4";



class App extends Component{
   constructor(props) {
      super(props);

      this.state = { videos: [] };

      YTSearch({key: API_KEY, term:"universe"},(yt_data) => {
         this.setState({
            videos : yt_data
         })
      });
   }
   render(){
         return (
         <div className="video_parent_comp">
            <div className="columns twelve">
               <h2 className="columns two logo">Search-Tube</h2>
               <SearchBar />
            </div>

            <div className="columns twelve">
               <div className="columns eight">
                  <VideoDetail video={this.state.videos[0]} />
               </div>

               <div className="columns four">
                  <VideoLIst videos={this.state.videos} />
               </div>
            </div>
         </div>
         );
      }
}

ReactDOM.render(<App />, document.getElementById("app_container"));
