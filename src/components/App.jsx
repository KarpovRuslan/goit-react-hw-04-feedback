import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { Section } from './Section/Section';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0
  }
  
  handleGood = () => { 
        this.setState(prevState => ({
                good: prevState.good + 1,
        }));
    };
    handleNeutral = () => {
        this.setState(prevState => ({
                neutral: prevState.neutral + 1,
        }));
    };   
    handleBad = () => {
         this.setState(prevState => ({
                bad: prevState.bad + 1,
        }));
    };
  
  onLeaveFeedback = (evt) => {
    this.setState(prevState => ({
      [evt]: prevState[evt] + 1,
    }));
  }
    
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good/this.countTotalFeedback()) *100)
  }
  
  render() {
    const { good, neutral,bad} = this.state;
        return (
          <>
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.onLeaveFeedback} />
            </Section>
            
            <Section title="Statistics">
              {this.countTotalFeedback() > 0 ? (
              <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />
              ) : (
                  <Notification message='There is no feedback'/>
              )}
              
            </Section>
            </>

        );

    }
}

export default App;
