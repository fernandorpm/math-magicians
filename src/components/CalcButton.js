import PropTypes from 'prop-types';

const CalcButton = ({ character, classButton }) => <button type="button" className={classButton}>{character}</button>;

CalcButton.defaultProps = {
  character: '?',
  classButton: 'whiteButton',
};

CalcButton.propTypes = {
  character: PropTypes.string,
  classButton: PropTypes.string,
};

export default CalcButton;
