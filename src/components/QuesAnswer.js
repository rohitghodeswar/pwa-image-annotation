import React, { Component } from "react";
import beautify from "js-beautify";
import $ from "jquery";
import Highlight from 'react-highlight.js';
// import "../../node_modules/highlight.js/styles/tomorrow-night-eighties.css";
import "../app.css";
import { data } from "../json/content";

class QuesAnswer extends Component {
  toggleAns = e => {
    $(e.target).toggleClass("show-ans-active");
    //$(this).parent().next().toggleClass('open', 1000);
    $(e.target)
      .parent()
      .next()
      .slideToggle("slow");
  };

  render() {
    const divStyle = {
      display: "none"
    };
    console.log("content loaded ", this.props.match.params);
    const topic = this.props.match.params.topic;
    let questions = [],
      title = "";
    data.es6.filter(topics => {
      topics.sub_menu.map(sub_topic => {
        if (Object.keys(sub_topic)[1] === topic) {
          questions = sub_topic[topic];
          title = sub_topic.sub_menu_name;
        }
      });
    });
    console.log("values ", questions);
    return (
      <div>
        <div className="topic-header text-center">{title}</div>
        {questions &&
          questions.map((list, index) => {
            return (
              <div className="question-set-section" key={index}>
                <div className="console-question">
                  {index + 1}. What shows in the console ?
                </div>
                <div className="question-block">
                  <Highlight language="javascript">
                    {beautify(list.question)}
                  </Highlight>
                </div>
                <div className="answer-section">
                  <div className="show-answer-text" onClick={this.toggleAns}>
                    Show Answer
                  </div>
                </div>
                <div className="show-answer" style={divStyle}>
                  {list.answer &&
                    list.answer.map((ans, index) => {
                      return <div key={index}>{ans}</div>;
                    })}
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default QuesAnswer;
