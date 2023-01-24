import mongoose from "mongoose";

//For Create Table into DataBase for Users.
const UserSchema = new mongoose.Schema(
     {
        name: {type: String, required: true},
        email: {type: String, required: true, uniqe: true}, //only one mail
        password: {type: String, required: true},
        address: {type: String, required: true},
        phone: {type: String, required: true},
        image: {type: String, required: true},
        isAdmin: {type: Boolean, default: false, required: true}
     },
     {
        timestamps: true //for date
     }
);

const User = mongoose.model("User", UserSchema);
export default User;
