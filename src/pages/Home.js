import React, { Component } from "react";
import Layout from "../components/Layout";
import { API_KEY, BASE_URL } from "../utility/constant";
import Card from "../components/Card";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      metaData: undefined,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMostPopularVideos().then((data) => {
      const { items, ...rest } = data;
      this.setState({
        videos: items,
        metaData: rest,
      });
    });
  }

  fetchMostPopularVideos = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/videos?chart=mostPopular&part=snippet&part=status&part=statistics&maxResults=12&key=${API_KEY}`
      );
      return await res.json();
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Layout>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-2">
          {this.state.videos.map((video, index) => (
            <Card key={video.id} {...video} />
          ))}
        </div>
      </Layout>
    );
  }
}
