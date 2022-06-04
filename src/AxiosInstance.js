import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method} request sent to ${config.baseURL}${
        config.url
      } at ${new Date().toISOString()}`
    );
    return config;
  },
  (error) => {
    console.log("Request failed");
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Success", response);
    return response;
  },
  async (error) => {
    console.log(error);

    if (error.response.status === 404) {
      const response = await axiosInstance.get("/users");
      const responseData = response.data;
      console.log("New response data", responseData);
      return response;
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
