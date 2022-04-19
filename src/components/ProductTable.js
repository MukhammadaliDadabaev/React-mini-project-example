import React, { Component } from "react";
import SearchBar from "./SearchBar";
import FruitsTable from "./FruitsTable";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      availableNow: false
    };
  }

  handleFilterText = (filterText) => {
    this.setState({
      filterText: filterText,
    });
  };

  handleAvailableNow = (availableNow) => {
    this.setState({
      availableNow: availableNow,
    });
  };

  render() {
    const { filterText, availableNow } = this.state;
    return (
      <div className="container p-5 bg-dark">
        <div className="row bg-light">
          <div className="col-sm-12">
            <SearchBar
              filterText={filterText}
              availableNow={availableNow}
              onFilterText={this.handleFilterText}
              onAvailableNow={this.handleAvailableNow}
            />
            <FruitsTable
              products={this.props.fruits}
              filterText={filterText}
              availableNow={availableNow}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductTable;
