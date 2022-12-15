import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", false);
const user = process.env.db_username;
const password = process.env.db_password;
const Connection = async () => {
  const URL =
    `mongodb+srv://${user}:${password}@e-commerce-web.aivlpjv.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
