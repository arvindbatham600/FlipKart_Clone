import { products } from "./constants/data.js";
import Product from "./model/Product-schema.js";

const defaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("Default data inserted successfully");
  } catch (error) {
    console.log("Error While inserting Default data", error.message);
  }
};

export default defaultData;
