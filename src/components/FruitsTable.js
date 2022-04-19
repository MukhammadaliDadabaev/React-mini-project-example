import React, { Component } from "react";
import FruitRow from "./FruitRow";

class FruitsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
 
  render() {
    const filterText = this.props.filterText;
    const availableNow = this.props.availableNow;

    const rows = [];
    this.props.products.forEach((fruit) => {
      if (fruit.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (availableNow && !fruit.stocked) {
        return;
      }
      rows.push(<FruitRow fruit={fruit} key={fruit.name} />);
    });
    return (
      <table className="table table-sm table-bordered table-hover">
        <thead className="thead-dark thead-sm">
          <tr>
            <th>№</th>
            <th>NOMI</th>
            <th>MIQDORI</th>
            <th>1kg, NARHI</th>
            <th>JAMI SUMMA</th>
          </tr>
        </thead>
        <tbody className="bg-light">{rows}</tbody>
      </table>
    );
  }
}
export default FruitsTable;
