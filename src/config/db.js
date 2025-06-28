import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const environment =
  process.env.ENVIRONMENT === "development"
    ? process.env.MONGO_LOCAL_URI
    : process.env.MONGO_ATLAS_URI;

const connectDB = async () => {
  mongoose.connection.on("error", (error) => {
    console.log(chalk.bgRed("^^^mongodb connection FAILED, "), error.message);
  });
  mongoose.connection.on("connected", () => {
    console.log(
      chalk.black.bold.bgGreenBright("^^^mongodb connection SUCCESSFULL")
    );
  });
  const connection = await mongoose.connect(environment);
};

export { connectDB };
