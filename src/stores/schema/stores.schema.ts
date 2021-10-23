import * as mongoose from 'mongoose';

export const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // categories: [
    //   {
    //     image: { type: String, required: false },
    //     name: { type: String, required: false },
    //   },
    // ],
  },
  {
    timestamps: true,
  },
);
