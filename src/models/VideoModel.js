import {Schema, model} from 'mongoose';

const VideoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    },
    thumbnailUrl: {
      type: String,
      required: true
    },
    totalLikes: {
      type: Number,
      required: false
    },
    totalComments: {
      type: Number,
      required: false
    }
  },
  {versionKey: false}
);

export default model('Video', VideoSchema);
