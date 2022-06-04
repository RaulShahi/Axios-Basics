import React, { Fragment } from "react";
import PropTypes from "prop-types";
import User from "./User";
import Add from "../UI/Add";

const Users = ({ users, showData, onDelete, handleModal, handleEditModal }) => {
  let usersList;
  if (users.length === 0) {
    usersList = <p>No such users.</p>;
  } else {
    usersList = (
      <ul>
        {users.map((item) => {
          return (
            <User
              key={item.id}
              user={item}
              id={item.id}
              onDelete={onDelete}
              handleEditModal={handleEditModal}
            />
          );
        })}
      </ul>
    );
  }
  return (
    <Fragment>
      <Add type="Users" handleModal={handleModal} />
      {showData && usersList}
    </Fragment>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  showData: PropTypes.bool,
  onDelete: PropTypes.func,
  handleModal: PropTypes.func,
};

export default Users;
