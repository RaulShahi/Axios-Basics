const useEdit = (allData, setAllData, setFilteredData) => {
  const editHandler = async (newData, id) => {
    console.log(id);
    const index = allData.findIndex((item) => item.id === id);
    console.log(index);
    const data = [...allData];
    data.splice(index, 1, newData);
    setAllData(data);
    setFilteredData(data);
  };

  return editHandler;
};

export default useEdit;
