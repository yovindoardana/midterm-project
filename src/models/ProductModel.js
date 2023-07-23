import {Schema, model} from 'mongoose';

const ProductSchema = new Schema(
  {
    videoId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    linkProduct: {
      type: String,
      required: true
    }
  },
  {versionKey: false}
);

export default model('Product', ProductSchema);
