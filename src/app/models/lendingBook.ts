import mongoose, { Schema } from 'mongoose';

const LendingBookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, reqired: true},
    genre: { type: String, required: true}
});

export const LendingBooks = mongoose.model('lendingBooks', LendingBookSchema);