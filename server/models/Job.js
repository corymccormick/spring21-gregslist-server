import mongoose, { Schema } from "mongoose";
const schema = mongoose.schema;

const Job = new Schema(
  {
    company: { type: String, required: true },
    description: { type: String, required: true, minlength: 3 },
    jobTitle: { type: String, required: true },
    hours: { type: Number, required: true },
    rate: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job