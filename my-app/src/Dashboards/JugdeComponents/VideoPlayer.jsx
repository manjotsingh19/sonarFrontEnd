import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        controls={true}
        width="60vw"
        height="50vh"
      />
    </div>
  );
}

export default VideoPlayer;
