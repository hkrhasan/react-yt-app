import React, { Component } from "react";
import Layout from "../components/Layout";
import { API_KEY, BASE_URL } from "../utility/constant";
import Card from "../components/Card";
import thumbnail from "../assets/thumbnail.jpeg";
import { Link } from "react-router-dom";
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
          {this.state.videos?.map((video, index) => {
            const { id, snippet } = video;
            const { kind, videoId, playlistId, channelId } = id;
            const { channelTitle } = snippet;

            switch (kind) {
              case "youtube#channel":
                return (
                  <a
                    href={`https://www.youtube.com/@${channelTitle}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex gap-x-6">
                      <div className="h-52 w-72 rounded-xl overflow-hidden flex items-center justify-center">
                        <img
                          src={video.snippet.thumbnails.high.url}
                          alt=""
                          className="rounded-full h-44 w-44"
                        />
                      </div>
                      <div className="w-[400px]">
                        <h4 className="text-xl font-bold">
                          {video.snippet.title}
                        </h4>
                        <p>{video.snippet.description}</p>
                      </div>
                    </div>
                  </a>
                );
                break;
              case "youtube#playlist":
                return (
                  <a
                    href={`https://www.youtube.com/playlist?list=${playlistId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex gap-x-6">
                      <div className="h-52 w-72 rounded-xl overflow-hidden flex items-center justify-center relative">
                        <img
                          src={video.snippet.thumbnails.high.url}
                          alt=""
                          className="h-full w-auto"
                        />
                        <div className="bg-black h-full w-1/2 absolute right-0 top-0 bg-opacity-70"></div>
                      </div>
                      <div className="w-[400px]">
                        <h4 className="text-xl font-bold">
                          {video.snippet.title}
                        </h4>
                        <p>{video.snippet.description}</p>
                      </div>
                    </div>
                  </a>
                );
                break;
              default:
                return (
                  <Link to={`/watch?v=${videoId}`}>
                    <div className="flex gap-x-6">
                      <div className="h-52 w-72 rounded-xl overflow-hidden flex items-center justify-center">
                        <img
                          src={video.snippet.thumbnails.high.url}
                          alt=""
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="w-[400px]">
                        <h4 className="text-xl font-bold">
                          {video.snippet.title}
                        </h4>
                        <p>{video.snippet.description}</p>
                      </div>
                    </div>
                  </Link>
                );
            }
          })}
        </div>
      </Layout>
    );
  }
}
