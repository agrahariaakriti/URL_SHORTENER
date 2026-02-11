import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(
      `${process.env.CONNECTINGSTRING}/${DB_NAME}`,
    );
    console.log("Databse connected Successfully");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};
export default connectDB;
