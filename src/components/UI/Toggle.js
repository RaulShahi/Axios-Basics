import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ToggleWrapper = ({ entity, show, handleToggle }) => {
  const toggleHandler = () => {
    handleToggle();
  };

  return (
    <Fragment>
      <h2>{`${entity}`.charAt(0).toUpperCase() + `${entity}`.slice(1)}</h2>
      <button onClick={toggleHandler}>
        {show ? "Hide " : "Show "}
        {entity}
      </button>
    </Fragment>
  );
};

ToggleWrapper.prototypes = {
  entity: PropTypes.string,
  show: PropTypes.bool,
  handleToggle: PropTypes.func,
};
export default ToggleWrapper;
