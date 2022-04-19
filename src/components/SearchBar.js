import React, { Component } from "react";

class SearchBar extends Component {
  state = {};

  handleFilter = (e) => {
    this.props.onFilterText(e.target.value);
  };

  handleChecked = (e) => {
    this.props.onAvailableNow(e.target.value);
  };

  render() {
    return (
      <form className="p-3">
        <div className="form">
          <label htmlFor="searchInput">Search for fruits</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            name="searchInput"
            id="searchInput"
            value={this.props.inputText}
            onChange={this.handleFilter}
          />
        </div>
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="checked"
            id="checked"
            checked={this.props.availableNow}
            onChange={this.handleChecked}
          />
          <label className="form-check-lable" htmlFor="checked">
            Available fruits
          </label>
        </div>
      </form>
    );
  }
}

export default SearchBar;
