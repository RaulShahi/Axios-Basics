import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import EditUserForm from "../../Forms/EditUserForm";

const EditUserModal = ({ handleModal, userData, editHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={handleModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <EditUserForm
          onSubmit={handleModal}
          userData={userData}
          editHandler={editHandler}
        />,
        document.getElementById("todoForm-root")
      )}
    </>
  );
};

EditUserModal.propTypes = {
  handleModal: PropTypes.func,
  addHandler: PropTypes.func,
};

export default EditUserModal;
