import { useState, useEffect } from "react";
import { axiosInstance } from "../AxiosInstance";

const useFetch = (entity) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/usrs");
        const responseData = response.data;
        setFetchedData(responseData);
        setFilteredData(responseData);

        setIsLoading(false);
      } catch (error) {
        setError(true);

        if (error.response) {
          // server responded with status other than 200 range
          console.log(error.response.headers);
          console.log(error.response.data);
          console.log(error.response.status);
          // console.log(error, error.message);
          // throw new Error(`Could not fetch ${entity}`);

          if (error.response.status === 404) {
            setError(true);
            // alert("Page Not Found!");
          }
        } else if (error.request) {
          //request was made but no response
          console.log(error.request);
        } else {
          console.log(error.message);
        }
      }
    };

    fetchData();
  }, []);

  return {
    fetchedData,
    filteredData,
    isLoading,
    error,
    setFetchedData,
    setFilteredData,
  };
};

export default useFetch;
