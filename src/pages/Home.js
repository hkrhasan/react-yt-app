import React, { Component } from "react";
import Layout from "../components/Layout";
import { API_KEY, BASE_URL } from "../utility/constant";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      videos: [],
      metaData: undefined,
      isLoading: true,
      selectedCategory: { id: "" },
    };
  }

  componentDidMount() {
    this.fetchVideoCategoryList().then((categories) => {
      const { items, ...rest } = categories;
      this.setState({
        categories: items,
        categoryMetaData: rest,
        // selectedCategory: items[0],
      });
    });

    this.fetchVideosByCategory().then((data) => {
      const { items, ...rest } = data;
      this.setState({
        videos: items,
        metaData: rest,
      });
    });
  }

  fetchVideosByCategory = async (videoCategoryId = "", pageToken = "") => {
    try {
      let url = `${BASE_URL}/videos?chart=mostPopular&part=snippet&part=status&part=statistics&maxResults=12&regionCode=IN&key=${API_KEY}`;

      if (videoCategoryId) {
        url += `&videoCategoryId=${videoCategoryId}`;
      }

      if (pageToken) {
        url += `&pageToken=${pageToken}`;
      }
      const res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.error(error);
    }
  };

  fetchVideoCategoryList = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/videoCategories?regionCode=IN&key=${API_KEY}`
      );
      return await res.json();
    } catch (error) {
      console.error(error);
    }
  };

  onCategoryClick = async (category) => {
    this.setState({ selectedCategory: category });
    const videos = await this.fetchVideosByCategory(category.id);

    const { items, ...rest } = videos;
    this.setState({
      videos: items,
      metaData: rest,
    });
  };

  fetchMore = async () => {
    const videos = await this.fetchVideosByCategory(
      this.state.selectedCategory.id,
      this.state.metaData.nextPageToken
    );

    const { items, ...rest } = videos;
    this.setState({
      videos: [...this.state.videos, ...items],
      metaData: rest,
    });
  };

  render() {
    return (
      <Layout>
        <div className="flex items-center gap-x-3 overflow-x-scroll px-2 no-scrollbar">
          <button
            onClick={() => this.onCategoryClick({ id: "" })}
            className={`border border-black rounded-xl px-3 py-1 font-bold whitespace-nowrap ${
              this.state?.selectedCategory?.id === ""
                ? "bg-black text-white"
                : "bg-gray-200"
            }`}
          >
            All
          </button>
          {this.state.categories.map((category, index) => {
            const {
              id,
              snippet: { title, assignable },
            } = category;

            if (!assignable) return null;

            return (
              <button
                key={`cat-${index}`}
                id={`cat-${index}`}
                onClick={() => this.onCategoryClick(category)}
                className={`border border-black rounded-xl px-3 py-1 font-bold whitespace-nowrap ${
                  id === this.state?.selectedCategory?.id
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                {title}
              </button>
            );
          })}
        </div>
        <InfiniteScroll
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-2"
          dataLength={this.state?.videos?.length} // 12
          next={this.fetchMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.videos?.map((video, index) => (
            <Card key={video.id} {...video} />
          ))}
        </InfiniteScroll>
      </Layout>
    );
  }
}
