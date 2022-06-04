import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import classes from "./Modal.module.css";

const UserForm = ({ onSubmit, addHandler, action }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

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

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (name === "" || age === "" || contact === "" || email === "") {
      setError(true);
      return;
    }
    const newData = {
      id: Math.floor(Math.random() * 100),
      Name: name,
      Age: age,
      Contact: contact,
      Email: email,
    };
    addHandler(newData);
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
        <button>Add</button>
      </form>
    </Card>
  );
};

UserForm.propTypes = {
  handleModal: PropTypes.func,
  addHandler: PropTypes.func,
};

export default UserForm;
