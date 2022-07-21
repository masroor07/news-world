import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <style>{"body { background-color: rgb(255, 242, 250); }"}</style>

        <div>
          <Navbar />
          <NewsComponent />
          <Footer />
        </div>
      </>
    );
  }
}
