import React from "react";
import { axiosInstance } from "../../AxiosInstance";
import PropTypes from "prop-types";

const Delete = ({ id, deleteHandler }) => {
  const handleDelete = async () => {
    console.log("Clicked delete");
    const response = await axiosInstance.delete(`/users/${id}`);
    console.log(response);
    deleteHandler(id);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

Delete.propTypes = {
  id: PropTypes.number,
  deleteHandler: PropTypes.func,
};

export default Delete;
