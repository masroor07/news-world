import React, { Component } from "react";
import NewsItemComponent from "./NewsItemComponent";

export class NewsComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=0e9ad8b775ed4910a9156e90f9c05ffd&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }
  toggleNext = async () => {
    console.log("Next loaded");
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0e9ad8b775ed4910a9156e90f9c05ffd&page=${
        this.state.page + 1
      }&pagesize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({});
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  togglePrevious = async () => {
    console.log("Previous loaded");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0e9ad8b775ed4910a9156e90f9c05ffd&page=${
      this.state.page - 1
    }&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({});
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h3>Top headlines:</h3>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItemComponent
                    title={element.title ? element.title.slice(0, 43) : ""}
                    description={
                      element.content ? element.content.slice(0, 80) : ""
                    }
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://image.shutterstock.com/image-vector/breaking-news-background-world-tv-260nw-719752474.jpg"
                    }
                    newsURL={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="container my-1 py-2">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.togglePrevious}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.toggleNext}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default NewsComponent;
