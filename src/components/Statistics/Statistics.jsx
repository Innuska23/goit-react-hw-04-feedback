import PropTypes from 'prop-types';
import { Paragraph } from './Statistics.styled';

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) =>
(
    <div>
        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: {neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
        <Paragraph>Total: {total}</Paragraph>
        <Paragraph>Positive percentage: {Math.floor(positivePercentage)} %</Paragraph>
    </div>
);


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;