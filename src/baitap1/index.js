import React, { Component } from "react";
import Header from "./header";
import Navbar from "./navbar";
import Content from "./content";
import Footer from "./footer";

class Baitap1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flex">
          <Navbar />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Baitap1;
