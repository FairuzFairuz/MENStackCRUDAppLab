import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  make: { type: String, required: true }, // e.g., Toyota, Honda
  model: { type: String, required: true }, // e.g., Corolla, Civic
  year: { type: Number, required: true }, // e.g., 2020, 2022
  price: { type: Number, required: true }, // Price in SGD
});

const Car = mongoose.model("Car", carSchema);
export default Car;
