import mongoose from "mongoose";
import CarSchema from "../models/Car";
import ValueSchema from "../models/Value";
import JobSchema from "../models/Job";


// this is where models get registered and access from the db
class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema);
  Jobs = mongoose.model("Job", JobSchema);
  Houses = mongoose.model("House", JobSchema);
}

export const dbContext = new DbContext();
