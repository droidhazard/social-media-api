import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const environment =
  process.env.ENVIRONMENT === "development"
    ? process.env.MONGO_LOCAL_URI
    : process.env.MONGO_ATLAS_URI;

const connectDB = async () => {
  mongoose.connection.on("error", (error) => {
    console.log("^^^mongodb connection FAILED");
  });
  mongoose.connection.on("connected", (message) => {
    console.log("^^^mongodb connection SUCCESSFULL");
  });
  const connection = await mongoose.connect(environment);
};

export { connectDB };
