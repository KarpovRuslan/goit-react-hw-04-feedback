import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  const handleGood = () => {
    setGood(prevState => prevState + 1);
  };
  const handleNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };
  const handleBad = () => {
    setBad(prevState => prevState + 1);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleGood={handleGood}
          handleNeutral={handleNeutral}
          handleBad={handleBad}
        />
      </Section>

      <Section title="Statistics">
        {good || neutral || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
