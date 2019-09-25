import React, { Component } from "react";

const styles = {
  backgroundColor: "#ccc",
  border: "5px solid #ddd",
  margin: "10px",
  padding: "10px"
};

export default class ImageApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoSrc: window.URL || window.webkitURL
    };
  }
  componentDidMount() {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia ||
      navigator.oGetUserMedia;

    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        { video: true },
        this.handleVideo,
        this.videoError
      );
    }
  }
  handleVideo(stream) {
    // Update the state, triggering the component to re-render with the correct stream
    this.setState({ videoSrc: window.URL.createObjectURL(stream) });
    this.videoElement.play();
  }
  videoError() {}

  render() {
    const video = (
      <video
        id="video"
        style={styles}
        width="300"
        height="280"
        className="cameraFrame"
        src={this.state.videoSrc}
        autoPlay="true"
        ref={input => {
          this.videoElement = input;
        }}
      ></video>
    );
    return (
      <>
        <div>{video}</div>
      </>
    );
  }
}
