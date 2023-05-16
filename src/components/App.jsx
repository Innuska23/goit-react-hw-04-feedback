import { useState } from "react";

import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOption';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return totalFeedback()
      ? Math.round((good * 100) / totalFeedback())
      : 0;
  };

  const handleReaction = reaction => {
    switch (reaction) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);

      default:
        return;
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 22,
        color: '#010101',
        padding: '1rem',
      }}
    >
      <Section title="Please leave feedback">
        <>
          <FeedbackOptions
            onLeaveFeedback={handleReaction}
            options={['good', 'neutral', 'bad']}
          />
        </>

      </Section>

      <Section title="Statistics">
        <>
          {!totalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />

          )}
        </>
      </Section>
    </div>
  );
}

export default App;