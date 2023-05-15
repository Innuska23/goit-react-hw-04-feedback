import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { useState} from "react";

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const  handleReaction = reaction => {
      this.setState(state => ({ [reaction]: state[reaction] + 1 }));
    };

const countTotalFeedback = () => {
  return bad + good + neutral;
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
              // options={Object.keys(state)}
            />
          </>

        </Section>

        <Section title="Statistics">
          <div>
            {!countTotalFeedback ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                // positivePercentage={positiveFeedbackPercentage} }

              />
              )}
        </div>
        </Section>
      </div>
    );
}

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleReaction = reaction => {
//     this.setState(state => ({ [reaction]: state[reaction] + 1 }));
//   };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((acc, el) => acc + el, 0);

//   countPositiveFeedbackPercentage = () => {
//     const totalReaction = this.countTotalFeedback();

//     if (!totalReaction) return 0;

//     return (100 * this.state.good) / totalReaction;
//   };

//   render() {
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
//     const { good, neutral, bad } = this.state;

//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           fontSize: 22,
//           color: '#010101',
//           padding: '1rem',
//         }}
//       >
//         <Section title="Please leave feedback">
//           <>
//             <FeedbackOptions
//               onLeaveFeedback={this.handleReaction}
//               options={Object.keys(this.state)}
//             />
//           </>

//         </Section>

//         <Section title="Statistics">
//           <div>
//             {!totalFeedback ? (
//               <Notification message="There is no feedback" />
//             ) : (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={totalFeedback}
//                 positivePercentage={positiveFeedbackPercentage}
//               />
//             )}
//           </div>
//         </Section>
//       </div>
//     );
//   }
// }

// export { App };