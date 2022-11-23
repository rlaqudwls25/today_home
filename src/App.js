import React from "react";
import Nav from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
