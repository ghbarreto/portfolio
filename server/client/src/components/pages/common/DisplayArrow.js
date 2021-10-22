import '../../scss/DisplayArrow.scss';
import { connect } from 'react-redux';

const DisplayArrow = ({ details }) => {
  const changeUlPosition = details.details
    ? details.details.location !== 'Reach'
      ? 'main-style bounce'
      : 'main-styleUp bounceUp'
    : null;
  const changeArrowPosition = details.details
    ? details.details.location !== 'Reach'
      ? 'arrow-down'
      : 'arrow-up'
    : null;
  return (
    <ul className={changeUlPosition}>
      <li className={`${changeArrowPosition} arrow`}></li>
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps)(DisplayArrow);
