import '../../scss/DisplayArrow.scss';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const DisplayArrow = ({ details, handlePageChange, ...props }) => {
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

  const navigatePages = () => {
    if (props.currentPage <= 4) {
      return handlePageChange(props.currentPage + 1);
    }
    if (props.currentPage >= 5) {
      return handlePageChange(0);
    }
  };

  useEffect(() => {
    navigatePages();
  }, [props.currentPage]);

  return (
    <ul className={changeUlPosition}>
      <li
        style={{ cursor: 'pointer' }}
        onClick={() => navigatePages()}
        className={`${changeArrowPosition} arrow`}
      ></li>
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps)(DisplayArrow);
