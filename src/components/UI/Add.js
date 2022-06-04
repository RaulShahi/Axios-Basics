import React from "react";
import PropTypes from "prop-types";

const Add = ({ type, handleModal, action }) => {
  const modalHandler = () => {
    handleModal();
    // action("Submit");
  };
  return (
    <button onClick={modalHandler} style={{ margin: "1rem" }}>
      Add {type}
    </button>
  );
};

Add.propTypes = {
  type: PropTypes.string,
  handleModal: PropTypes.func,
};

export default Add;
