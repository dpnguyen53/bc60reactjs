import Header from "./header";
import Navbar from "./navbar";
import Content from "./content";
import Footer from "./footer";

function Baitap2() {
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

export default Baitap2;
