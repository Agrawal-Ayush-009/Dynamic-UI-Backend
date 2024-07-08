import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema(
  {
    orientation: {
      type: String,
      enum: ["vertical", "horizontal"],
    },
    text: String,
    textColor: String,
  },
  { _id: false }
);

const childrenSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    properties: propertySchema,
    children: [propertySchema],
  },
  { _id: false }
);

const layoutSchema = new Schema({
  type: { type: String, required: true },
  properties: propertySchema,
  children: [childrenSchema],
});

export const Layout = mongoose.model("Layout", layoutSchema);
