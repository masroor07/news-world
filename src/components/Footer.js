import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="py-1 my-1 " style={{ backgroundColor: "#dfdada"}}>
        <ul className="nav justify-content-center  border-bottom pb-3 mb-3" >
          <li className="nav-item py-3 my-1 mx-3"> <a className="nav-link" href="/">Home</a></li>
          <li className="nav-item py-3 my-1 mx-3"><a className="nav-link" href="/">About</a></li>
        </ul>
        <p className="text-center">
          © 2022 Masroor Shah, <strong>World |Today</strong>{" "}
        </p>
      </footer>
    );
  }
}
