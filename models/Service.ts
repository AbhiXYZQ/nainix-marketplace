import mongoose, { Schema, Document, Model } from "mongoose";

export interface IService extends Document {
  sellerId: mongoose.Types.ObjectId; // Kaun bech raha hai?
  title: string;       // "I will build a website"
  description: string; // Detail mein batao
  category: string;    // Web Dev, Logo Design, etc.
  price: number;       // Kitne rupaye?
  deliveryTime: number; // Kitne din lagenge?
  createdAt: Date;
}

const ServiceSchema: Schema<IService> = new Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Ye User model se juda hoga
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    category: {
      type: String,
      required: [true, "Please select a category"],
    },
    price: {
      type: Number,
      required: [true, "Please set a price"],
    },
    deliveryTime: {
      type: Number,
      required: [true, "Please specify delivery time in days"],
    },
  },
  {
    timestamps: true,
  }
);

const Service: Model<IService> =
  (mongoose.models.Service as Model<IService>) ||
  mongoose.model<IService>("Service", ServiceSchema);

export default Service;