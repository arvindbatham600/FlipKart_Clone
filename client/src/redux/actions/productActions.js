import * as actionType from "../constants/productConstant";
import axios from "axios";
const URL = "http://localhost:8000";

export const getProducts = () => async (dispathch) => {
  try {
    let { data } = await axios.get(`${URL}/products`);
    dispathch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispathch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message });
  }
};
