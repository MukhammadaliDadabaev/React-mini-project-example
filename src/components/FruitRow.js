import React, { Component } from "react";

class FruitRow extends Component {
  state = {};

  render() {
    const fruit = this.props.fruit;
    const name = fruit.stocked ? fruit.name : <span style={{color: "red"}}>{fruit.name}</span>
    return (
      <tr>
        <td>{fruit.id}</td>
        <td>{name}</td>
        <td>{fruit.total}</td>
        <td>{fruit.price}</td>
        <td>{fruit.totals}</td>
      </tr>
    );
  }
}

export default FruitRow;
