import axios from "axios";

const url = "";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data);
  } catch (error) {
    console.log("error while calling signup api ", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${url}/login`, data);
  } catch (error) {
    console.log("error while calling login api", error);
    return error.response;
  }
};
