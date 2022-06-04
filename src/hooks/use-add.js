import { axiosInstance } from "../AxiosInstance";

const useAdd = (allData, setAllData, setFilteredData) => {
  const addHandler = async (newData) => {
    setAllData(allData.concat(newData));
    setFilteredData(allData.concat(newData));
    const response = await axiosInstance.post("/users", newData);
    console.log(response);
  };

  return addHandler;
};

export default useAdd;
