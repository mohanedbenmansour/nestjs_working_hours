import * as mongoose from 'mongoose';

const childSchema = new mongoose.Schema({
  day: { type: String, required: true },
  working_hours: [String],
});

export const postSchema = new mongoose.Schema({
  working_days: [childSchema],
});

export interface Post extends mongoose.Document {
  id: String;
  working_days: [];
}
