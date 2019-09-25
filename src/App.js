import React from 'react';
import image from './test-image-1.jpg';
import { MarkerArea } from 'markerjs';
import './App.css';
import ImageApp from './components/ImageApp';

class App extends React.Component {
  componentDidMount() {
    const m = new MarkerArea(document.getElementById('imageToAnnotate'));
m.open(
    (dataUrl) => {
        const res = document.getElementById("imageToAnnotate");
        res.src = dataUrl;
    }
);
  }
  render() {
    return (
      <div className="App">
        <ImageApp />
        <header>
          <h1>Image Annotation Example</h1>
        </header>
          <img src={image} id="imageToAnnotate" alt="marker test" height="300" width="344" style={{marginTop: '40px'}}></img>
      </div>
    );
  }
}

export default App;
