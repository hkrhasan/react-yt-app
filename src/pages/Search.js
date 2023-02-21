import React, { Component } from "react";
import Layout from "../components/Layout";
import { API_KEY, BASE_URL } from "../utility/constant";
import Card from "../components/Card";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      metaData: undefined,
      isLoading: true,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Layout>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-2"></div>
      </Layout>
    );
  }
}
