import PropTypes from 'prop-types';
import { Reaction, Button, Span } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    function getColorByReaction(reaction, isButton) {
        switch (reaction) {
            case "good":
                return isButton ? "#198754" : "#157347";
            case "bad":
                return isButton ? "#dc3545" : "#bb2d3b";

            default:
                return isButton ? "#6c757d" : "#565e64";
    }
}
    return (

        <Reaction>
            {options.map(reaction => (
                <Button 
                    color={getColorByReaction(reaction)}
                    key={reaction}
                    onClick={() => onLeaveFeedback(reaction)}>
                    <Span color={getColorByReaction(reaction, true)}>
                        {reaction}
                    </Span>
                </Button>
            ))}
        </Reaction>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};