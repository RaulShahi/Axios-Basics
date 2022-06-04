const useDelete = (allData, filteredData, setAllData, setFilteredData) => {
  const deleteHandler = (id) => {
    setAllData(allData.filter((item) => item.id !== id));
    setFilteredData(filteredData.filter((item) => item.id !== id));
  };

  return { deleteHandler };
};

export default useDelete;
