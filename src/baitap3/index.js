import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Wwd from "./wwd";
import Contact from "./contact";
import List from "./list";
import Footer from "./footer";

export default function Baitap3() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row">
          <Wwd />
          <Contact />
        </div>
      </div>
      <List />
      <Footer />
    </div>
  );
}
