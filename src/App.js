import "../node_modules/highlight.js/styles/tomorrow-night-eighties.css";
import "./app.css";
import React, { Component } from "react";
import MobNavigation from "./components/MobNavigation";
import NavigationSection from "./components/NavigationSection";
import ContentSection from "./components/ContentSection";
import RightInfoSection from "./components/RightInfoSection";

class App extends Component {
  render() {
    //let data = beautify(this.state.value, { indent_size: 2 });
    return (
      <div className="container-fluid">
        <div className="row">
          <MobNavigation />
          <div className="col-sm-4 col-md-3 col-lg-3 navigation-section">
            <NavigationSection />
          </div>
          <div className="col-sm-6 col-md-7 col-lg-7 content-section mobile-content">
            <ContentSection />
          </div>
          <div className="col-sm-2 col-md-2 col-lg-2 right-info-section">
            <RightInfoSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
