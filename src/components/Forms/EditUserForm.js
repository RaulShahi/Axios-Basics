import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import { axiosInstance } from "../../AxiosInstance";
import classes from "./Modal.module.css";

const EditUserForm = ({ onSubmit, userData, editHandler }) => {
  const [name, setName] = useState(userData.Name);
  const [age, setAge] = useState(userData.Age);
  const [contact, setContact] = useState(userData.Contact);
  const [email, setEmail] = useState(userData.Email);

  const [error, setError] = useState(null);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const contactChangeHandler = (event) => {
    setContact(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (name === "" || age === "" || contact === "" || email === "") {
      setError(true);
      return;
    }
    const newData = {
      id: userData.id,
      Name: name,
      Age: age,
      Contact: contact,
      Email: email,
    };
    try {
      const response = await axiosInstance.patch(
        `/users/${userData.id}`,
        newData
      );
      editHandler(newData, userData.id);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
    // editHandler(newData, userData.id);
    onSubmit();
    setName("");
    setAge("");
    setContact("");
    setEmail("");
  };

  return (
    <Card className={classes.modal}>
      <form className="form-control" onSubmit={formSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" onChange={nameChangeHandler} value={name} />
        <label htmlFor="age">Age</label>
        <input type="text" onChange={ageChangeHandler} value={age} />
        <label htmlFor="contact">Contact</label>
        <input type="text" onChange={contactChangeHandler} value={contact} />
        <label htmlFor="email">Email</label>
        <input type="text" onChange={emailChangeHandler} value={email} />
        {error && <p>Fields cannot be empty</p>}
        <button>Edit</button>
      </form>
    </Card>
  );
};

EditUserForm.propTypes = {
  handleModal: PropTypes.func,
  addHandler: PropTypes.func,
};

export default EditUserForm;
