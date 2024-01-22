import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderListProduct = () => {
    const { products } = this.props;
    return products.map((product) => {
      return (
        <SanPham
          key={product.maSP}
          product={product}
          getDetailProduct={this.props.getDetailProduct}
          addToCart={this.props.addToCart}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
