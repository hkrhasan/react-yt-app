import React, { Component } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
export default class App extends Component {
  componentDidMount() {
    // const homeEndPoint =
    //   "https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=100&key=<your-api-key>";
    // const searchEndpoint =
    //   "https://youtube.googleapis.com/youtube/v3/search?q=learnwithhkr&key=<your-api-key>&maxResults=100";
    // fetch(homeEndPoint)
    //   .then((res) => res.json())
    //   .then((rJson) => {
    //     console.log({ rJson });
    //   });
  }

  render() {
    return (
      <div className="flex flex-col gap-y-3">
        <Header />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-2">
          {[...Array(50).keys()].map((number) => (
            <Card key={number} />
          ))}
        </div>
      </div>
    );
  }
}
