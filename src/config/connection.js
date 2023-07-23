import {connect} from 'mongoose';

const connectToDatabase = async () => {
  try {
    await connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connection Successful');
  } catch (err) {
    console.error('Connection Error', err.message);
    process.exit(1);
  }
};

export default connectToDatabase;
