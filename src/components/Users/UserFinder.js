import { useState } from "react";
import Users from "./Users";
import UserModal from "../UI/Modal/UserModal";
import EditUserModal from "../UI/Modal/EditUserModal";
import useFetch from "../../hooks/use-fetch";
import useToggle from "../../hooks/use-toggle";
import useEdit from "../../hooks/use-edit";
import Spinner from "../UI/Spinner";
import classes from "./Users.module.css";
import ToggleWrapper from "../UI/Toggle";
import useDelete from "../../hooks/use-delete";
import useSearch from "../../hooks/use-search";
import useAdd from "../../hooks/use-add";
import ErrorComponent from "../ErrorComponent";

const entity = "users";

const UserFinder = () => {
  const {
    fetchedData,
    filteredData,
    isLoading,
    error,
    setFilteredData,
    setFetchedData,
  } = useFetch(entity);
  const { showData, toggleHandler } = useToggle();
  const { deleteHandler } = useDelete(
    fetchedData,
    filteredData,
    setFetchedData,
    setFilteredData
  );
  const searchChangeHandler = useSearch(
    fetchedData,
    filteredData,
    setFetchedData,
    setFilteredData
  );
  const [userModal, setUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [editUserData, setEditUserData] = useState({});
  const addHandler = useAdd(filteredData, setFetchedData, setFilteredData);
  const editHandler = useEdit(fetchedData, setFetchedData, setFilteredData);

  const handleUserModal = () => {
    setUserModal((curState) => !curState);
  };

  const handleEditFormModal = (userData) => {
    setEditUserModal((curState) => !curState);
    setEditUserData(userData);
  };

  const allData = { name: filteredData[0].name.age };

  return (
    <>
      {error ? (
        <ErrorComponent />
      ) : (
        <>
          <input type="search" onChange={searchChangeHandler} />
          {isLoading && <Spinner />}
          <div className={classes.users}>
            <ToggleWrapper
              entity={entity}
              show={showData}
              handleToggle={toggleHandler}
            />
            <Users
              users={filteredData}
              showData={showData}
              onDelete={deleteHandler}
              handleModal={handleUserModal}
              handleEditModal={handleEditFormModal}
            />
          </div>
          {userModal && (
            <UserModal handleModal={handleUserModal} addHandler={addHandler} />
          )}
          {editUserModal && (
            <EditUserModal
              handleModal={handleEditFormModal}
              editHandler={editHandler}
              userData={editUserData}
            />
          )}
        </>
      )}
    </>
  );
};

export default UserFinder;
