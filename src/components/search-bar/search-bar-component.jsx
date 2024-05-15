import { Component } from "react";
import './search-bar-styles.css'
class SearchBox extends Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.props.handlerFunction}
        />
      </div>
    );
  }
}

export default SearchBox;
