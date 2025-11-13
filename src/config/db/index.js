// src/config/db/index.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("SUCCESS");
  } catch (error) {
    console.error("ERROR", error);
  }
}

export default { connect };
