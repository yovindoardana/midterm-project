import {connect} from 'mongoose';
import 'dotenv/config';

const connection = async () => {
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

export default connection;
