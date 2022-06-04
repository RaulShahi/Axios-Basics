import React from "react";
import PropTypes from "prop-types";
import Delete from "../UI/Delete";

const User = ({ user, onDelete, id, handleEditModal, action }) => {
  const keys = Object.keys(user);
  const modalHandler = () => {
    handleEditModal(user);
  };

  return (
    <div style={listStyle}>
      {keys.map((item) => {
        if (item !== "id") {
          return (
            <div key={item}>
              <li>{`${item}: ${user[item]}`}</li>
            </div>
          );
        }
      })}

      <div style={buttonDiv}>
        <button onClick={modalHandler}>Edit</button>
        <Delete deleteHandler={onDelete} id={id} />
      </div>
    </div>
  );
};
const listStyle = {
  border: "1px solid black",
  margin: "1rem",
  padding: "1rem",
  borderRadius: "10px",
};

const buttonDiv = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "1rem",
};

User.propTypes = {
  name: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.number,
};

export default User;
