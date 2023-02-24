import React from "react";
import YouTube from "react-youtube";

class YtPlayer extends React.Component {
  render() {
    const opts = {
      height: this.props.height || "390",
      width: this.props.width || "640",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YtPlayer;
