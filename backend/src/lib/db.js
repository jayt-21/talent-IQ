
import mongoose from 'mongoose';
import {ENV} from "./env.js";

export const connectDB = async()=>
{
try{
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log('connected to mongoose',conn.connection.host);
} 
catch(error)
{
    console.log('error connecting to mongoose',error);
    process.exit(1);
} 
};