import React, { Component } from "react";
import API from "../utils/API";

class giphyContainer extends Component {
    state = {
      result: {},
      search: ""
    };
  
    searchMovies = query => {
      API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div> Okay?
        </div>
      );
    }
  }
  
  export default giphyContainer;
  