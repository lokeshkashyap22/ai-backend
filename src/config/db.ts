import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {});
    console.log("MongoDB Connected Successfully✅");
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    console.log("MongoDB Connection Failed❌");
    process.exit(1);
  }
};

export default connectDB;
