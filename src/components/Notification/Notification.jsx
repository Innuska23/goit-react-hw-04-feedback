import PropTypes from 'prop-types';
import { Paragraph } from './Notification.styled';

const Notification = ({ message }) => {
    return <Paragraph>{message}</Paragraph>;
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;