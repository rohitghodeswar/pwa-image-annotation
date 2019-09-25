import React, { Component } from "react";

export default class ImageApp extends Component {
  
  processDevices(devices) {
    devices.forEach(device => {
      console.log(device.label);
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

  takePhoto = () => {
    // const { sendFile } = this.props;
    const context = this.canvas.getContext("2d");
    context.drawImage(this.videoPlayer, 0, 0, 400, 300);
    this.imageCaptured.src = this.canvas.toDataURL("image/png");
    this.imageCaptured.style.display = "inline-block"
    //this.canvas.toBlob(sendFile);
  };

  render() {
    return (
      <>
        <video ref={ref => (this.videoPlayer = ref)} width="400" heigh="300" />
        <button onClick={this.takePhoto}>Take photo!</button>
        <canvas
          width="400"
          height="300"
          ref={ref => (this.canvas = ref)}
          hidden
        />
        <img
          ref={ref => (this.imageCaptured = ref)}
          width="400"
          heigh="300"
          alt="captured photo"
          style={{display: 'none'}}
        />
      </>
    );
  }
}
