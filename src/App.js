import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (

      <div>
        <Navbar />
        <Wrapper>
          
        </Wrapper>
        <Footer />
      </div>

  );
}

export default App;
