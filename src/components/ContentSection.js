import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePageContent from "./HomePageContent";
import QuesAnswer from "./QuesAnswer";
import "../app.css";

class ContentSection extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePageContent} />
        <Route exact path="/:topic" component={QuesAnswer} />
      </Switch>
    );
  }
}

export default ContentSection;
