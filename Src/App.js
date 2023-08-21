import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Component/Header";
import { HeaderImg } from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";






const AppLauout = () => {
  return (
    <React.Fragment>
      <Header />
      <HeaderImg />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLauout />);
