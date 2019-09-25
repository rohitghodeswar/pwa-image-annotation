import React, { Component } from "react";
import { MarkerArea } from "markerjs";

export default class ImageApp extends Component {
  processDevices(devices) {
    devices.forEach(device => {
      this.setDevice(device);
    });
  }

  async setDevice(device) {
    const { deviceId } = device;
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { deviceId }
    });
    this.videoPlayer.srcObject = stream;
    this.videoPlayer.play();
  }

  async componentDidMount() {
    const cameras = await navigator.mediaDevices.enumerateDevices();
    this.processDevices(cameras);
  }

  componentDidUpdate() {
    console.log('llll');
    const m = new MarkerArea(document.getElementById("imageToAnnotate"));
    console.log('mmm', m);
    m.open(dataUrl => {
      const res = document.getElementById("imageToAnnotate");
      res.src = dataUrl;
    });
  }

  takePhoto = () => {
    // const { sendFile } = this.props;
    const context = this.canvas.getContext("2d");
    context.drawImage(this.videoPlayer, 0, 0, 400, 300);
    this.imageCaptured.src = this.canvas.toDataURL("image/png");
    this.imageCaptured.style.display = "block";

    const m = new MarkerArea(document.getElementById("imageToAnnotate"));
    m.show(dataUrl => {
      const res = document.getElementById("imageToAnnotate");
      res.src = dataUrl;
    });
    //this.canvas.toBlob(sendFile);
  };

  render() {
    return (
      <>
        <video ref={ref => (this.videoPlayer = ref)} width="400" heigh="300" />
        <br></br>
        <button style={{ display: "block" }} onClick={this.takePhoto}>
          Take photo!
        </button>
        <br></br>
        <canvas
          width="400"
          height="300"
          ref={ref => (this.canvas = ref)}
          hidden
        />
        <img
          id="imageToAnnotate"
          ref={ref => (this.imageCaptured = ref)}
          width="400"
          heigh="300"
          alt="captured for annotation"
          style={{ display: "none", marginTop: "30px" }}
        />
      </>
    );
  }
}
