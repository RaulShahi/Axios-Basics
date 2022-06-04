import React, { useState, useEffect } from "react";
import styles from "./Todos/TodoFinder.module.css";
import Spinner from "./UI/Spinner";
import classes from "./Users/Users.module.css";
import ToggleWrapper from "./UI/Toggle";

const WrapperComponent = ({ render, entity }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showData, setShowData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${entity}`
      );
      if (!response.ok) {
        throw new Error(`Could not fetch ${entity}`);
      }
      const responseData = await response.json();
      setFetchedData(responseData.slice(0, 10));
      setFilteredData(responseData.slice(0, 10));

      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (entity === "users") {
      setFilteredData(
        fetchedData.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    if (entity === "todos") {
      setFilteredData(
        fetchedData.filter((todo) =>
          todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  const deleteHandler = (id) => {
    setFetchedData(fetchedData.filter((item) => item.id !== id));
    setFilteredData(fetchedData.filter((item) => item.id !== id));
  };

  const toggleHandler = () => {
    setShowData((curState) => !curState);
  };

  return (
    <div className={styles.finder}>
      <input type="search" onChange={searchChangeHandler} />
      {isLoading && <Spinner />}
      <div className={classes.users}>
        <ToggleWrapper
          entity={entity}
          show={showData}
          handleToggle={toggleHandler}
        />
        {render(filteredData, showData, deleteHandler)}
      </div>
    </div>
  );
};

export default WrapperComponent;
