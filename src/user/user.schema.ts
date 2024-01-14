// user.schema.ts
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export interface User extends mongoose.Document {
  username: string;
  password: string;
}
