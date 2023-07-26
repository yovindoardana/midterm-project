import {Schema, model} from 'mongoose';

const CommentSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    videoId: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  },
  {timestamps: true},
  {versionKey: false}
);

export default model('Comment', CommentSchema);
