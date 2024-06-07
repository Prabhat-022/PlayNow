
import mongoose from 'mongoose';
import { DB_NAME } from '../utils/constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        console.log(connectionInstance);

        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance}`);

    } catch (error) {
        console.log("MONGODB Connection faild", error)
        process.exit(1);
    }
}

export default connectDB;