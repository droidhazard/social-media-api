import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  mongoose.connection.on("error", (error) => {
    console.log("^^^mongodb connection FAILED");
  });
  mongoose.connection.on("connected", (message) => {
    console.log("^^^mongodb connection SUCCESSFULL");
  });
  const connection = await mongoose.connect(process.env.MONGO_LOCAL_URI);
};

export { connectDB };
