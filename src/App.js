import "./App.css";
import React, { Component } from "react";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  addFeedback = (evt) => {
    const objKey = evt.target.textContent.toLowerCase();
    this.setState((prevState) => {
      return {
        [objKey]: prevState[objKey] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => ({
      positivePercentage: Math.round((prevState.good / prevState.total) * 100),
    }));
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={(evt) => {
              this.addFeedback(evt);
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}
          />
        </Section>

        <Section title={"Statistics"}>
          {total === 0 ? (
            <Notification />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
