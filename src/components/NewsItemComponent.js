import React, { Component } from "react";

export class NewsItemComponent extends Component {
  render() {
    let { title, description, imgUrl, newsURL } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem", backgroundColor: "#d9d4d4" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...[Click below]</p>
            <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItemComponent;
