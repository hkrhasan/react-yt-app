import React, { Component } from "react";
import Layout from "../components/Layout";
import { API_KEY, BASE_URL } from "../utility/constant";
import Card from "../components/Card";
import thumbnail from "../assets/thumbnail.jpeg";
// /search?part=snippet&q=learnwithhkr&key=[YOUR_API_KEY]

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      metaData: undefined,
      isLoading: true,
    };
  }

  fetchDataWithSearch = async (q) => {
    try {
      const res = await fetch(
        `${BASE_URL}/search?part=snippet&maxResults=12&q=${q}&key=${API_KEY}`
      );
      const data = await res.json();
      const { items, ...rest } = data;
      this.setState({
        videos: items,
        metaData: rest,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Layout search={this.fetchDataWithSearch}>
        <div className="ml-auto mr-auto grid gap-y-8">
          {this.state.videos?.map((video, index) => (
            <div className="flex gap-x-6">
              <div className="h-52 w-72 rounded-xl overflow-hidden">
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <div className="w-[400px]">
                <h4 className="text-xl font-bold">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}
