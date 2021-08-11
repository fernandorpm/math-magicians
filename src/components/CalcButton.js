import PropTypes from 'prop-types';

const CalcButton = ({ buttonName, classButton }) => <button type="button" className={classButton}>{buttonName}</button>;

CalcButton.defaultProps = {
  buttonName: '?',
  classButton: 'whiteButton',
};

CalcButton.propTypes = {
  buttonName: PropTypes.string,
  classButton: PropTypes.string,
};

export default CalcButton;
