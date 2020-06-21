import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
    id: { type: String, required: true },
    username: { type: String, required: true},
    password: { type: String, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    token: { type: String, required: true}
});

export const Users = mongoose.model('users', UserSchema);