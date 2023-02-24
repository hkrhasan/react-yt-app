import React from "react";
import Layout from "../components/Layout";
import YtPlayer from "../components/YtPlayer";
import { useSearchParams } from "react-router-dom";

function Watch() {
  let [searchParams, setSearchParam] = useSearchParams();
  const videoId = searchParams.get("v");
  return (
    <Layout>
      <div className="flex items-center justify-center pt-20">
        <YtPlayer videoId={videoId} height="570" width="1000" />
      </div>
    </Layout>
  );
}

export default Watch;
