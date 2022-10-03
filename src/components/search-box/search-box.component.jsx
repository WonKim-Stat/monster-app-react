import { Component } from "react";
import "/Users/wonseokkim/complete-react/monster-app-react/src/components/search-box/search-box.styles.css";

class SearchBox extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
