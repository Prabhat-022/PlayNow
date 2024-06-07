import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,

        }
    }
)

export const User = mongoose.model("User", userSchema)