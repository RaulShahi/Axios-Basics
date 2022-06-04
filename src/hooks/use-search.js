import { useState, useEffect } from "react";

const useSearch = (allData, filteredData, setAllData, setFilteredData) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // setAllData(
    //   allData.filter((user) =>
    //     user.Name.toLowerCase().includes(searchTerm.toLowerCase())
    //   )
    // );
    setFilteredData(
      allData.filter((user) =>
        user.Name.trim().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  return searchChangeHandler;
};

export default useSearch;
