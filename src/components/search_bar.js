import React, {Component} from "react";

class SearchBar extends Component{
   constructor(props) {
      super(props);
         this.state = {
            term : ""
      };
   }

   render() {
      return (
         <div className="columns ten">
            <input type="text" className="u-full-width" placeholder="Please enter your search here"
                              value={this.state.term}
                              onChange={ (e) => this.setState({term: e.target.value})
                           }/>
         </div>
      );
   }
}

export default SearchBar;
