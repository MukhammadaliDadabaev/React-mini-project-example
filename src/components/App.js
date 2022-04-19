import React, { Component } from "react";
import ProductTable from "./ProductTable";

class App extends Component {
  state = {};

  products = [
    { id: 1, total: "1570.kg", price: "$ 4.27", totals: "$ 6703.9", stocked: true, name: "Gilos" },
    { id: 2, total: "1070.kg", price: "$ 3.05", totals: "$ 5675.7", stocked: false, name: "Shaftoli" },
    { id: 3, total: "1490.kg", price: "$ 3.45", totals: "$ 5173.5", stocked: true, name: "Anor" },
    { id: 4, total: "1700.kg", price: "$ 2.85", totals: "$ 4843.1", stocked: true, name: "Hurmo" },
    { id: 5, total: "1530.kg", price: "$ 3.00", totals: "$ 2603.8", stocked: false, name: "Nok" },
    { id: 6, total: "170.kg", price: "$ 2.75",  totals: "$ 3873.7",stocked: true, name: "Anjir" },
    { id: 7, total: "1350.kg", price: "$ 2.15", totals: "$ 2893.6", stocked: false, name: "Olvali" },
  ];

  render() {
    return (
      <div>
        <ProductTable fruits={this.products}/>
      </div>
    );
  }
}

export default App;
